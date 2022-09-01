import gql from "../utils/graphql-utils";
import {
  GetBlogPostBySlugQuery,
  GetBlogPostBySlugQueryVariables,
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables,
} from "../__generated__/graphql";
import { queryContentful } from "./query-contentful";
// import gql from "graphql-tag";

const GET_BLOG_POSTS = gql`
  query GetBlogPosts($preview: Boolean) {
    blogPostCollection(preview: $preview) {
      items {
        title
        slug
        date
      }
    }
  }
`;

const variables = { preview: false };

export const getBlogPosts = async () => {
  const response = await queryContentful<
    GetBlogPostsQueryVariables,
    GetBlogPostsQuery
  >({
    query: GET_BLOG_POSTS,
    variables,
    space: process.env.CONTENTFUL_SPACE_ID as string,
  });

  return response.body.data;
};

const GET_BLOG_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: String) {
    blogPostCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug
        date
      }
    }
  }
`;

export const getBlogPostBySlug = async (slug: string) => {
  const response = await queryContentful<
    GetBlogPostBySlugQueryVariables,
    GetBlogPostBySlugQuery
  >({
    query: GET_BLOG_POST_BY_SLUG,
    variables: { slug },
    space: process.env.CONTENTFUL_SPACE_ID as string,
  });

  return response.body.data;
};
