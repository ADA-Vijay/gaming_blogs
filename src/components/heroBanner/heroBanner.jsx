import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";

const HeroBanner = async (data) => {
  const bannerData = await data;
  console.log("category", bannerData);
  const firstCard =
    bannerData && bannerData.length > 0 ? bannerData[0].posts[0] : null;

  return (
    <div className={styles.heroCardWrap}>
      <div className={styles.container}>
        {data && data.data.map((e, categoryIndex) => (
          <div key={categoryIndex}>
            <h1 className={styles.promoTitle}>{e.category.name}</h1>
            <div className={styles.heroCardBody}>
              {e.posts && e.posts.length > 0 && (
                <div className={styles.heroCardBox2}>
                  <Link
                    key={e.posts[0].id}
                    prefetch={true}
                    href={`/${e.category.slug}/${e.posts[0].slug}`}
                    className={styles.heroCardMobile}
                  >
                    <div
                      className={styles.heroCardBoxItem2}
                      style={{
                        background: `url(${e.posts[0]._embedded["wp:featuredmedia"][0].source_url})`,
                      }}
                    >
                      <div className={styles.heroCardBoxItemInfo}>
                        <h6 className={styles.heroCardBoxItemBags}>
                          {e.posts[0]._embedded["wp:term"][0][0].name}
                        </h6>
                        <h4
                          className={styles.heroCardBoxItemName}
                          dangerouslySetInnerHTML={{
                            __html: e.posts[0].title.rendered,
                          }}
                        ></h4>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              <div className={styles.heroCardBox}>
                {e.posts &&
                  e.posts.slice(1).map((card, index) => (
                    <Link
                      key={index}
                      prefetch={true}
                      href={`/${card.slug}/${card.slug}`}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
