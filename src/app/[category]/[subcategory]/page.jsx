import React from "react";
import styles from "@/app/page.module.css";
import { notFound } from "next/navigation";
import RelatedPosts from "@/components/relatedPosts/relatedPosts";
import Link from "next/link";
import { fetchFromAPI } from "@/utils/fetchData";

async function getData(subcategory) {
  try {
    const data = await fetchFromAPI(`posts?slug=${subcategory}&_embed`, {
      next: { revalidate: 180 },
    });

    if (data && data.length > 0) {
      console.log("data in subcategory",data)
      const postTags = data[0].tags;
      if (postTags && postTags.length > 0) {
        const tagIds = postTags.join(",");
        const tagData = await fetchFromAPI(`tags?include=${tagIds}`);
        return { post: data[0], tags: tagData };
      }
      return { post: data[0], tags: [] };
    }
    return null;
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}

const getPostByCategory = async (params) => {
  if (params) {
    const catgoryData = await fetchFromAPI(
      `categories?slug=${params.category}`
    );
    if (catgoryData) {
      try {
        const categoryId = catgoryData[0].id;
        const posts = await fetchFromAPI(
          "posts?categories=" + categoryId + "&_embeded"
        );
        if (posts) {
          return posts;
        }
        console.log(postData);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export async function generateMetadata({ params }) {
  const data = await getData(params.subcategory);
  if (data && data.length > 0) {
    return {
      title: data[0].yoast_head_json.title,
      description: data[0].yoast_head_json.description,
      openGraph: {
        images: [
          {
            url: data[0].yoast_head_json.og_image[0].url,
            height: 1200,
            width: 600,
            alt: "Alt",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: data[0].yoast_head_json.title,
        description: data[0].yoast_head_json.description,
        creator: data[0]._embedded.author[0].name,
        images: {
          url: data[0].yoast_head_json.og_image[0].url,
          width: "1200",
          height: "600",
          alt: data[0].yoast_head_json.title,
          site: "GameWitted",
        },
      },
    };
  }
}
const page = async ({ params }) => {
  const category = params.category;
  const subcategory = params.subcategory;
  const data = await getData(subcategory);
  const { post, tags } = data;

  const formatDate = (isoDate) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", options);
  };
  if (!data) {
    return notFound();
  }
  const hash = params.hash;
  let hashOffset = 0;

  const categoryPosts = await getPostByCategory(params);

  const scrollToSection = (sectionName) => {
    const sectionElement = document.getElementById(sectionName);
    if (sectionElement) {
      const rect = sectionElement.getBoundingClientRect();
      hashOffset = rect.top;
      window.scrollTo({
        top: window.scrollY + hashOffset,
        behavior: "smooth",
      });
    }
  };

  if (hash) {
    setTimeout(() => {
      scrollToSection(hash);
    }, 0);
  }
  return (
    <>
      {post && (
        <>
          <div className={styles.latestWrap}>
            <div className={styles.container}>
              <div className={styles.listingDetailsWrap}>
                <div className={styles.latestBody}>
                  <div className={styles.latestContent}>
                    <div className={styles.listingDetailsBody}>
                      <div className={styles.latestBox}>
                        {post ? (
                          <>
                            <h1
                              className={`${styles.listingDetailMainTitle} mb-4`}
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
                              }}
                            ></h1>
                            <div className={styles["author-section"]}>
                              <Link
                                href={`/author/${post._embedded.author[0].name.replace(
                                  " ",
                                  "-"
                                )}`}
                                className="description"
                              >
                                {post._embedded.author[0].name}&nbsp;|&nbsp;
                              </Link>
                              <span> Published: {formatDate(post.date)}</span>
                            </div>
                            <div className={styles.listingDetailMainImg}>
                              <img
                                src={post.jetpack_featured_media_url}
                                alt="img"
                              />
                            </div>
                            <div
                              id={hash}
                              className={styles.subListingDetailsItem}
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: post.content.rendered,
                                }}
                              ></div>
                              {post && (
                                <>
                                  <RelatedPosts
                                    category={params.category}
                                    data={categoryPosts}
                                  ></RelatedPosts>
                                  {tags.length > 0 && (
                                    <>
                                      <h1 className={styles.relatedTopic}>Related Topics</h1>
                                      {tags.map((tag) => (
                                        <Link
                                          key={tag.id}
                                          className={styles.btnRelatedTopics}
                                          href={`/tag/${tag.slug}`}
                                        >
                                          {tag.name}
                                        </Link>
                                      ))}
                                    </>
                                  )}
                                </>
                              )}
                            </div>
                          </>
                        ) : (
                          <div className={styles.heroCardBoxItem}>
                            <h2 className="text-center">
                              No Content found on {subcategory}
                            </h2>
                          </div>
                        )}
                      </div>
                      <div className={styles.authorSection}>
                        <h3 className={styles.authorTitle}>About Author</h3>
                        <div className={styles.authorNameDiv}>
                          <Link
                            href={`/author/${post._embedded.author[0].name.replace(
                              " ",
                              "-"
                            )}`}
                            className={styles.authorName}
                          >
                            {post._embedded.author[0].name}
                          </Link>
                        </div>
                        <div>
                          <span className={styles.authorDescription}>
                            {post._embedded.author[0].description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
