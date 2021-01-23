import React from 'react';
import { Link } from 'gatsby';

const BlogListItem = ({ blog }) => {
  return (
    <div className="blog-list">
      <Link to={blog.slug}>
        <div className="link">
          <div className="info">
            <span>{blog.primary_tag.name}</span>
          </div>
          <h2>{blog.title}</h2>
          <p className="excerpt">web performance and security</p>
          <div className="meta">
            <div className="profile-image">
              <img src={blog.primary_author.profile_image} />
            </div>
            <div className="author">
              <p><strong>{blog.primary_author.name}</strong></p>
              <time className="published-at">{blog.published_at_pretty}</time>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const BlogList = ({ blogs }) => (
  <div className="blogs">
    {blogs.map((blog, i) => (
      <BlogListItem blog={blog} key={i} />
    ))}
  </div>
);

export default BlogList;
