import { Link, PageRendererProps } from 'gatsby';
import React, { PropsWithChildren } from 'react';

export type LayoutProps = PageRendererProps & { title: string };

const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { location, title, children } = props;

  const header =
    location.pathname === `${__PATH_PREFIX__}/` ? (
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    ) : (
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
