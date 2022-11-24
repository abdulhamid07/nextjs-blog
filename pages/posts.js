import Container from "@components/Container";
import SectionHeader from "@components/SectionHeader";
import Head from "next/head";
import Posts from "@components/Posts";

export async function getServerSideProps() {
  const relationQuery =
    "populate[0]=thumbnail&populate[1]=category&populate[2]=author&populate[3]=author.avatar";
  const reqPosts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${relationQuery}`
  );

  const resPosts = await reqPosts.json();

  console.log(resPosts.data);
  return {
    props: {
      posts: resPosts.data,
    },
  };
}

function Posts({ posts }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Posts &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>All Post</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <Posts posts={posts} />
        )}
      </Container>
    </>
  );
}

export default Posts;
