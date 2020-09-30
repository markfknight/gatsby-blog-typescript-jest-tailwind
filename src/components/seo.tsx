import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta = {
  name: string;
  content: string;
};

type SeoProps = {
  title: string;
  lang?: string;
  meta?: Meta[];
  keywords?: string[];
  description?: string;
};

type query = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
};

const SEO: React.FC<SeoProps> = (props) => {
  const { site }: query = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = props.description || site.siteMetadata.description;
  const lang = props.lang || `en`;
  const meta = props.meta || [];
  const keywords = props.keywords || [];
  const title = props.title || ``;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? { content: keywords.join(`, `), name: `keywords` }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
