import PostContent from "../../components/posts/post/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";
import Head from "next/head";

const PostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export default PostPage;

export async function getStaticProps(context) {
  const { params } = context;
  const postData = getPostData(params.slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600, // 10 minutes
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
