import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Posts from "@components/Posts";
import SectionHeader from "@components/SectionHeader";
import Head from "next/head";

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const relationQuery =
    "&populate[0]=thumbnail&populate[1]=category&populate[2]=author&populate[3]=author.avatar";
  const reqPostByCategory = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[category][slug][$eq]=${slug}${relationQuery}`
  );

  const postByCategory = await reqPostByCategory.json();
  return {
    props: {
      posts: postByCategory.data,
      category:
        postByCategory.data.length > 0
          ? postByCategory.data[0].attributes.category.data.attributes.name
          : "No Results",
      slug: slug,
    },
  };
}

function Category({ posts, category, slug }) {
  return (
    <>
      <Head>
        <title>{category} &mdash; Stripblog</title>
      </Head>
      <Container>
        <SectionHeader>Category : {category}</SectionHeader>
        <Posts posts={posts} keyword={slug} />
      </Container>
    </>
  );
}

export default Category;
