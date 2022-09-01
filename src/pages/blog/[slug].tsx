import { GetStaticPropsContext } from "next/types";
import { getBlogPostBySlug, getBlogPosts } from "../../services/blog-service";

const BlogPost = (props) => {
  return (
    <>
      <h1>{props.blogPost.title}</h1>
      <h3>{props.blogPost.date}</h3>
    </>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  const paths = posts.blogPostCollection?.items.map((post) => ({
    params: { slug: post?.slug },
  }));

  console.log("blog getStaticPaths", JSON.stringify({ paths }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{ slug: string }>
) {
  const slug = ctx?.params?.slug;

  if (slug) {
    const post = await getBlogPostBySlug(slug);
    const blogPost = {
      ...post.blogPostCollection?.items[0],
    };

    console.log("getStaticProps", { slug });
    return {
      props: { blogPost }, // will be passed to the page component as props
    };
  }

  return {
    notFound: true,
  };
}
