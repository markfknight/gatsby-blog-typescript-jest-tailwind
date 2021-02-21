import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

type PostListData = {
  allMarkdownRemark: {
    totalCount: number;
    edges: [
      {
        node: {
          id: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            date: string;
          };
          excerpt: string;
        };
      }
    ];
  };
};

export type PostListProps = {
  title?: string;
};

export const PurePostList: React.FC<PostListProps & { data: PostListData }> = (
  props
) => (
  <>
    <h4>{props.data.allMarkdownRemark.totalCount} Posts</h4>
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
      <article key={node.id}>
        <header>
          <h3>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={node.fields.slug}
            >
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </Link>
          </h3>
        </header>
        <section>
          <p>{node.excerpt}</p>
        </section>
      </article>
    ))}
  </>
);

export const PostList: React.FC<PostListProps> = (props) => {
  const data: PostListData = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
            }
          }
        }
      }
    `
  );
  return <PurePostList {...props} data={data}></PurePostList>;
};
