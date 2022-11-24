import Container from "@components/Container";
import Posts from "@components/Posts";
import SectionHeader from "@components/SectionHeader";
import Head from "next/head";

export async function getServerSideProps({ query }) {
  const keyword = query.q;
  const relationQuery =
    "&populate[0]=thumbnail&populate[1]=category&populate[2]=author&populate[3]=author.avatar";
  const reqPostSearch = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[title][$contains]=${keyword}${relationQuery}`
  );

  const postSearch = await reqPostSearch.json();
  return {
    props: {
      posts: postSearch.data,
      keyword: keyword,
    },
  };
}

function Search({ posts, keyword }) {
  return (
    <>
      <Head>
        <title>Search &mdash; Stripblog</title>
      </Head>
      <Container>
        <SectionHeader>Search : {keyword}</SectionHeader>
        <Posts posts={posts} keyword={keyword}/>
      </Container>
    </>
  );
}

export default Search;
