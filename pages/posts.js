import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import SectionHeader from "@components/SectionHeader";
import Head from "next/head";
import { useState } from "react";
import dummyPosts from "../utils/posts.json"

function posts() {
  // const [posts, setPosts] = useState(dummyPosts)
  const posts = dummyPosts
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
          </div>
        ) : (
          <div className="flex -mx-4 mt-6 flex-wrap">
            {posts.map(post => (
              <div className="md:w-4/12 px-4 py-6" key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}

export default posts;