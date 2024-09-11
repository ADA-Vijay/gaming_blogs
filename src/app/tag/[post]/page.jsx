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
      const getPostsbyCategory = await fetchFromAPI(
        "posts?tags=" + tagId + "&_embed"
      );
      if (getPostsbyCategory && getPostsbyCategory.length > 0) {
        return { posts: getPostsbyCategory, tagId };
      }
    }
  } catch (err) {
    console.log(err);
  }
  return { posts: [], tagId: null };
};

// const getTagsBySlug = async (slug) => {
//   try {
//     const response = await fetch("https://gameblogs.us23.cdn-alpha.com/graphql", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: `
//           query GetPostsByTagSlug($slug: String!) {
//             posts(where: { tagSlugIn: [$slug] }) {
//               nodes {
//                 id
//                 title
//                 slug
//                 date
//                 content
//                 tags {
//                   nodes {
//                     id
//                     name
//                     slug
//                   }
//                 }
//               }
//             }
//           }
//         `,
//         variables: { slug },
//       }),
//     });

//     const result = await response.json();

//     if (result.errors) {
//       console.error("GraphQL errors:", result.errors);
//       return { posts: [] };
//     }

//     const data = result.data;

//     if (data && data.posts && data.posts.nodes.length > 0) {
//       return { posts: data.posts.nodes };
//     }
//   } catch (err) {
//     console.error("Error fetching posts by tag slug:", err);
//   }

//   return { posts: [] };
// };


const page = async ({ params }) => {
  const { posts, tagId } = await getTagsByslug(params.post);
  // const { posts } = await getTagsBySlug(params.post);
  // if (databytag) {
  //   console.log(databytag);
  // }

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
