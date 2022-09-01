import { getBlogPosts } from "../../services/blog-service";

const BlogPage = () => {
  return (
    <div>
      <h1>Blog page</h1>
    </div>
  );
};

export default BlogPage;

export async function getStaticProps(context) {
  const x = await getBlogPosts();
  console.log("getStaticProps", { response: JSON.stringify(x) });
  return {
    props: {}, // will be passed to the page component as props
  };
}
