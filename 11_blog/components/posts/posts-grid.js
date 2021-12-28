import classes from "./posts-grid.module.css";

import PostItem from "./post-item";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          image={post.image}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </ul>
  );
};

export default PostsGrid;
