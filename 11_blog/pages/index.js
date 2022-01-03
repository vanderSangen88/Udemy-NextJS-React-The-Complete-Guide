import Head from "next/head";

import Hero from "./../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Max' Blog</title>
        <meta name="description" content="Bla bla bla" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
