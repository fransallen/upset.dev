import React from 'react';
import { Link } from 'gatsby';

const BlogListItem = ({ blog }) => {
  return (
    <div className="blog-list">
      <Link to={blog.slug}>
        <h2>{blog.title}</h2> <span className="reading-time">{blog.reading_time} mins <span className="r">reading</span></span>
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
