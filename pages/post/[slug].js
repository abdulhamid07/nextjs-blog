import Layout from "@components/Layout";
import Container from "@components/Container";
import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
import Head from "next/head";
import Image from "next/image";
import { formatDate } from "utils/utils";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps({ params }) {
  const relationQuery =
    "&populate[0]=thumbnail&populate[1]=category&populate[2]=author&populate[3]=author.avatar";

  const slug = params.slug;
  const reqPost = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${slug}${relationQuery}`
  );

  const resPost = await reqPost.json();

  if (resPost.data.length == 0) return { notFound: true };
  return {
    props: {
      post: resPost.data[0],
    },
  };
}
function Detail({ post }) {
  const { thumbnail, author, category } = post.attributes;
  return (
    <>
      <Head>
        <title>{post.attributes.title} &mdash; Stripblog</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex flex-col items-center">
          <PostMetaTitle
            category={category?.data?.attributes.name}
            date={formatDate(post.attributes.publishedAt)}
            title={post.attributes.title}
            slug={post.attributes.slug}
            center
          />
          <PostAuthor
            authorAvatar={`${process.env.NEXT_PUBLIC_API_URL}${author.data.attributes.avatar.data.attributes.url}`}
            authorName={author?.data.attributes.name}
            authorJob={author?.data.attributes.job}
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnail.data.attributes.formats.thumbnail.url}`}
            width={thumbnail.data.attributes.formats.thumbnail.height}
            height={thumbnail.data.attributes.formats.thumbnail.width}
            alt="img-thumbnail"
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed text-justify">
          <p className="text-xl mb-4">{post.attributes.headline}</p>
          <ReactMarkdown className="prose">
            {post.attributes.content}
          </ReactMarkdown>
        </div>
      </Container>
    </>
  );
}

export default Detail;
