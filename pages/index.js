import Container from "@components/Container";
import FeaturedPost from "@components/FeaturedPost";
import Layout from "@components/Layout";
import Head from "next/head";
import { useState } from "react";
import CardPost from "../components/CardPost";
import dummyPosts from "../utils/posts.json";

export default function Home() {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="container mx-auto">
          <FeaturedPost />
          <div className="flex -mx-4 mt-6 flex-wrap">
            {posts.map((post) => (
              <div className="md:w-4/12 px-4 py-6" key={post.id}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
