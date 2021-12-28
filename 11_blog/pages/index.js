import Hero from "./../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for production - It makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    date: "2021-12-28",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for production - It makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    date: "2021-12-28",
    slug: "getting-started-with-nextjs-2",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for production - It makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    date: "2021-12-28",
    slug: "getting-started-with-nextjs-3",
  },
  {
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for production - It makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    date: "2021-12-28",
    slug: "getting-started-with-nextjs-4",
  },
];

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
