import React from "react";
import styles from "@/app/page.module.css";
import { notFound } from "next/navigation";
import { Container } from "react-bootstrap";
import ListingPage from "@/components/listing/listing";
import { fetchFromAPI } from "@/utils/fetchData";

async function getData(category) {
  try {
    const ApiUrl = "https://ashgamewitted.wpcomstaging.com/wp-json/wp/v2/";
    
    const catgoryData = await fetchFromAPI(`categories?slug=${category}`, {
      next: { revalidate: 180 },
    });

    if (!catgoryData || catgoryData.length === 0) {
      console.warn("No category data found for slug:", category);
      return {
        data:  null,
        url: "",
      };
    }

    const categoryId = catgoryData[0].id;
    const url = `posts?categories=${categoryId}`;

    const initialData = await fetchFromAPI(
      `${url}&per_page=10&_embed`,
      {
        next: { revalidate: 180 },
      }
    );
    return {
      data: initialData.length > 0 ? initialData : null,
      url: url,
    };
  } catch (error) {
    console.error("Error while fetching the data:", error);
    return {
      data:  null,
      url: "",
    };
  }
}

export async function generateMetadata({ params }) {
  const category = params.category;
  if (category) {
    return {
      title: category,
      description:
        "Welcome to Gamewitted, your ultimate destination for immersive gaming and captivating anime content! Dive into a world where pixels meet passion, as we bring you the latest updates, reviews, and insights from the gaming and anime realms.",
      openGraph: {
        images: [
          {
            url: "https://fama.b-cdn.net/gw/gamewittedlogo.jpg",
            height: 1200,
            width: 600,
            alt: "Alt",
          },
        ],
        icons: {
          icon: ["/favicon/favicon.ico"],
          shortcut: ["/favicon/favicon.ico"],
        },
      },
      twitter: {
        card: "summary_large_image",
        title:  category,
        description: "Welcome to Gamewitted, your ultimate destination for immersive gaming and captivating anime content! Dive into a world where pixels meet passion, as we bring you the latest updates, reviews, and insights from the gaming and anime realms",
        images: ["https://fama.b-cdn.net/gw/gamewittedlogo.jpg"],
      },
    };
  }
}


const Page = async ({ params }) => {
  const category = params.category;
  const response = await getData(category);
  if (!response) {
    console.error("No response received from getData");
    return notFound();
  }

  const { data, url } = response;

  if (!data) {
    console.warn("No data found for category:", category);
    return notFound();
  }

  return (
    <>
      <div className={styles.latestWrap}>
      </div>
      <ListingPage newdata={data} apiUrl={url} />
    </>
  );
};

export default Page;
