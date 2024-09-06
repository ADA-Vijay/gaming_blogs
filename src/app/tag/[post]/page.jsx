import React from "react";
import Listing from "@/components/listing/listing";
import { fetchFromAPI } from "@/utils/fetchData";

const getTagsByslug = async (slug) => {
  try {
    const getDetails = await fetchFromAPI("tags?slug=" + slug, {
      next: { revalidate: 180 },
    });
    if (getDetails && getDetails.length > 0) {
      const tagId = getDetails[0].id;
      const getPostsbyCategory = await fetchFromAPI("posts?tags=" + tagId+"&_embed");
      if (getPostsbyCategory && getPostsbyCategory.length > 0) {
        return { posts: getPostsbyCategory, tagId };
      }
    }
  } catch (err) {
    console.log(err);
  }
  return { posts: [], tagId: null };
};

const page = async ({ params }) => {
  const { posts, tagId } = await getTagsByslug(params.post);

  return (
    <>
      {posts && posts.length > 0 ? (
        <Listing newData={posts} url={`posts?tags=${tagId}`} />
      ) : (
        <p>No posts found for this tag.</p>
      )}
    </>
  );
};

export default page;
