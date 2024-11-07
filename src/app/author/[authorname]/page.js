import React from "react";
import styles from "@/app/author/[authorname]/page.module.css";
import style from "@/app/page.module.css";
import Listing from "@/components/listing/listing";
import NotFound from "@/app/not-found";
import { fetchFromAPI } from "@/utils/fetchData";
import Link from "next/link";



async function getAllAuthors(authorName) {
  const defaultResponse = {
    posts: [],
    authorDetail: null,  
  };

  if (!authorName) {
    return defaultResponse;
  }

  try {
    const users = await fetchFromAPI("users?&_embed", {
      next: { revalidate: 180 },
    });
    const author = authorName.replace(/-/g, " ");
    const authorDetail = users.find(
      (user) => user.name.toLowerCase() === author.toLowerCase()
    );

    if (authorDetail && authorDetail.id) {
      const posts = await fetchFromAPI(
        `posts?author=${authorDetail.id}&_embed`,
        {
          next: { revalidate: 180 },
        }
      );
      return { posts, authorDetail };
    }

    return defaultResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    return defaultResponse;
  }
}

const Page = async ({ params }) => {
  const authorName = params.authorname;
  const { posts, authorDetail } = await getAllAuthors(authorName);

  if (!authorDetail && posts.length === 0) {
    return <NotFound message={`no author and posts found`} />;
  }

  const personObject = authorDetail.yoast_head_json?.schema["@graph"].find(
    (item) => item["@type"] === "Person"
  );
  const twitterHandle = personObject?.sameAs?.find((url) =>
    url.includes("x.com")
  );

  return (
    <div>
      {authorDetail ? (
        <div className={style.container}>
          <div className={styles.authorDiv}>
            <div className={styles.authorSection}>
              <div className={styles.authorDivWrap}>
                <div className={styles.authorImageDiv}>
                  <img
                    src={authorDetail.avatar_urls["96"]}
                    alt={authorDetail.name}
                  />
                </div>
                <div>
                  <p className={styles.spanAuthor}>ABOUT THE AUTHOR</p>
                  <h1 className={styles.authorName}>{authorDetail.name}</h1>
                  {twitterHandle && (
                    <Link href={twitterHandle}>
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                  )}
                </div>
              </div>
              <p className={styles.authorDesc}>{authorDetail.description}</p>
            </div>
          </div>
        </div>
      ) : null}

      {posts.length > 0 ? (
        <Listing newData={posts} />
      ) : (
        authorDetail && <NotFound />
      )}
    </div>
  );
};

export default Page;
