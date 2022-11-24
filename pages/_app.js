import "../styles/globals.css";
import App from "next/app";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps, categories }) {
  return (
    <Layout categories={categories}>
      <Component {...pageProps} categories={categories} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const reqCategories = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
  );

  const categories = await reqCategories.json();

  return { ...appProps, categories };
};

export default MyApp;
