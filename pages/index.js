import Container from "@components/Container";
import FeaturedPost from "@components/FeaturedPost";
import Posts from "@components/Posts";
import Head from "next/head";

export async function getServerSideProps() {
  const relationQuery =
    "&populate[0]=thumbnail&populate[1]=category&populate[2]=author&populate[3]=author.avatar";
  const reqPostFeatured = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[featured][$eq]=true${relationQuery}`
  );
  const reqPosts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[featured][$eq]=false${relationQuery}`
  );

  const resPostFetured = await reqPostFeatured.json();
  const resPosts = await reqPosts.json();

  return {
    props: {
      featuredPost:
        resPostFetured.data.length > 0 ? resPostFetured.data[0] : false,
      posts: resPosts.data,
    },
  };
}
export default function Home({ featuredPost, posts }) {
  return (
    <>
      <Head>
        <title>Home &mdash; Stripblog</title>
      </Head>
      <Container>
        <div className="container mx-auto">
          {featuredPost && <FeaturedPost {...featuredPost} />}
          <Posts posts={posts} />
        </div>
      </Container>
    </>
  );
}
