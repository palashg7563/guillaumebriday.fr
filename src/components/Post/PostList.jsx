import React from 'react'
import { Link } from 'gatsby'

export default ({ posts }) => (
  <ul className="list-reset">
    {posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <li
          className="mb-8"
          key={post.id}
          itemScope=""
          itemType="http://schema.org/BlogPosting"
        >
          <Link
            to="/categories"
            itemProp="articleSection"
            className="btn btn--lightest btn--sm"
          >
            {post.frontmatter.category}
          </Link>

          <h2 className="font-semibold mb-0 mt-2 leading-tight">
            <Link
              to={post.fields.slug}
              className="text-black dark-mode:text-white"
            >
              <span itemProp="name">{post.frontmatter.title}</span>
            </Link>
          </h2>

          <div className="text-grey-darker dark-mode:text-grey text-sm">
            Le{' '}
            <span
              itemProp="datePublished"
              className="font-light"
              content={post.fields.datePublished}
            >
              {post.fields.date}
            </span>
          </div>
        </li>
      ))}
  </ul>
)
