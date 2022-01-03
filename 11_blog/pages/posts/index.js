import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="My description" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export default AllPostsPage;

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
