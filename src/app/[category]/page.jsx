import React from "react";
import { notFound } from "next/navigation";
import ListingPage from "@/components/listing/listing";
import { fetchFromAPI } from "@/utils/fetchData";

async function getData(category) {
  try {
    const catgoryData = await fetchFromAPI(`categories?slug=${category}`, {
      next: { revalidate: 180 },
    });

    if (!catgoryData || catgoryData.length === 0) {
      console.warn("No category data found for slug:", category);
      return {
        data: null,
        url: "",
      };
    }

    const categoryId = catgoryData[0].id;
    const url = `posts?categories=${categoryId}`;

    const initialData = await fetchFromAPI(`${url}&per_page=10&_embed`, {
      next: { revalidate: 180 },
    });
    return {
      data: initialData.length > 0 ? initialData : null,
      url: url,
    };
  } catch (error) {
    console.error("Error while fetching the data:", error);
    return {
      data: null,
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
        "Discover guides and news on esports, gaming, entertainment, and tech at GameTechAnime. We provide timely coverage to keep you informed on the latest industry developments.",
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
        title: category,
        description:
          "Discover guides and news on esports, gaming, entertainment, and tech at GameTechAnime. We provide timely coverage to keep you informed on the latest industry developments.",
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
    {
      <ListingPage newData={data} apiUrl={url} />
    }
      
    </>
  );
};

export default Page;
