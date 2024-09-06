import HeroBanner from "@/components/heroBanner/heroBanner";
import styles from "@/app/page.module.css";
import ListingPage from "@/components/listing/listing";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import LatestPosts from "@/components/latest/latest";
import { fetchFromAPI } from "@/utils/fetchData";
// async function getData() {
//   const ApiUrl = "https://ashgamewitted.wpcomstaging.com/wp-json/wp/v2/";
//   const trendingId = 606508208;
//   try {
//     const response = await fetch(
//       ApiUrl + "posts?per_page=10&order=desc&orderby=date&_embed=1",
//       {
//         next: { revalidate: 180 },
//       }
//     );
//     const newdata = await response.json();

//     const trending = await fetch(
//       `${ApiUrl}posts?tags=${trendingId}&_embed&per_page=4&orderby=date&order=desc`,
//       {
//         next: { revalidate: 180 },
//       }
//     );
//     const trendingPosts = await trending.json();
//     if (trendingPosts) {
//       return {
//         newdata,
//         trendingPosts,
//       };
//     }
//   } catch (error) {
//     throw new Error("Failed to fetch data");
//   }
// }


async function getcategoryData() {
  try {
    const categoryResponse = await fetchFromAPI("categories", {
      next: { revalidate: 180 },
    });

    const groupedPosts = await Promise.all(
      categoryResponse.map(async (category) => {
        const postResponse = await fetchFromAPI(
          `posts?_embed&per_page=5&categories=${category.id}`,
          {
            next: { revalidate: 180 },
          }
        );
         category.posts = postResponse
        return category  
      })
    ) ;

    return groupedPosts;
  } catch (error) {
    console.log(error);
    return [];
  }
}


export async function generateMetadata() {
    return {
      title: "",
      description:
        "Welcome to Gamewitted! Dive into immersive gaming and anime content with the latest updates, reviews, and insights. Where pixels meet passion!",
      images: [
        {
          url: "https://fama.b-cdn.net/gw/gwlogo.png",
          height: 1200,
          width: 600,
          alt: "Alt",
        },
      ],
    };
}

const Home = async () => {
  // const { newdata, trendingPosts } = await getData();
  const data = await getcategoryData();
  
  return (
    <>
      <Head>
        <link href={"/favicon.ico"} rel={"icon"} sizes="any" />
      </Head>
      <main className="">
        <LatestPosts data={data} latest={true}></LatestPosts>
        <div className={styles.promoWrap}>
          <div className={styles.container}>
            <h1 className={styles.promoTitle}>Categories</h1>
            <div className={styles.promoBody}>
              <div className={styles.promoBox}>
                {data && data.length > 0
                  ? data.map((card, index) => (
                      <Link
                        key={index}
                        prefetch={true}
                        href={`/${card.posts[0]._embedded["wp:term"][0][0].slug}/`}
                        className={styles.promoborder}
                      >
                        <div className={styles.promoBoxItem} key={index}>
                          <Image
                            className={styles.promoImg}
                            src={card.posts[0].jetpack_featured_media_url}
                            alt="Image"
                            loading="lazy"
                            width={500}
                            height={300}
                          />
                          <div className={styles.promoInfo} key={index}>
                            <h4 className={styles.promoName}>
                              {card.posts[0]._embedded["wp:term"][0][0].name}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
        {data && data.length > 1 && (
          <HeroBanner data={data}></HeroBanner>
        )}
        {/* <ListingPage newdata={newdata} apiUrl={""} /> */}
      </main>
    </>
  );
};

export default Home;
