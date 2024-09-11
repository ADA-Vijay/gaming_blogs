import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import { fetchFromAPI } from "@/utils/fetchData";
const getLatestPosts = async () => {
  const posts = await fetchFromAPI(
    "posts?per_page=5&order=desc&orderby=date&_embed=1"
  );
  if (posts && posts.length > 0) {
    return posts;
  }
};
const LatestPosts = async () => {
  const data = await getLatestPosts();
  return (
    <div className={styles.heroCardWrap}>
      <div className={styles.container}>
        <div >
          <h1 className={styles.promoTitle}>Latest</h1>
          {data && data.length > 0 && (
            <div className={styles.heroCardBody}>
              {data[0] && (
                <div className={styles.heroCardBox2}>
                  <Link
                    key={data[0].id}
                    prefetch={true}
                    href={`/${data[0]._embedded["wp:term"]?.[0]?.[0]?.slug}/${data[0].slug}`}
                    className={styles.heroCardMobile}
                  >
                    <div
                      className={styles.heroCardBoxItem2}
                      style={{
                        background: `url(${data[0]._embedded["wp:featuredmedia"][0].source_url})`,
                      }}
                    >
                      <div className={styles.heroCardBoxItemInfo}>
                        <h6 className={styles.heroCardBoxItemBags}>
                          {data[0]._embedded["wp:term"][0][0].name}
                        </h6>
                        <h4
                          className={styles.heroCardBoxItemName}
                          dangerouslySetInnerHTML={{
                            __html: data[0].title.rendered,
                          }}
                        ></h4>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              <div className={styles.heroCardBox}>
                {data &&
                  data.slice(1).map((card, index) => (
                    <Link
                      key={index}
                      prefetch={true}
                      href={`/${card._embedded["wp:term"]?.[0]?.[0]?.slug}/${card.slug}`}
                      className={styles.heroCardMobile}
                    >
                      <div
                        className={styles.heroCardBoxItem}
                        style={{
                          background: `url(${card._embedded["wp:featuredmedia"][0].source_url})`,
                        }}
                      >
                        <div className={styles.heroCardBoxItemInfo}>
                          <h6 className={styles.heroCardBoxItemBags}>
                            {card._embedded["wp:term"][0][0].name}
                          </h6>
                          <h4
                            className={styles.heroCardBoxItemName}
                            dangerouslySetInnerHTML={{
                              __html: card.title.rendered,
                            }}
                          ></h4>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
