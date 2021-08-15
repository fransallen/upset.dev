import React from 'react';

const BlogListItem = ({ blog }) => {
  const profileImage = `https://cdn.statically.io/img/` + blog.primary_author.profile_image.replace('https://', '') + '?w=40';

  return (
    <div className="blog-list">
      <a href={`${blog.slug}/`}>
        <div className="link">
          <div className="info">
            <span>{blog.primary_tag.name}</span>
          </div>
          <h2>{blog.title}</h2>
          <p className="excerpt">{blog.excerpt}</p>
          <div className="meta">
            <div className="profile-image">
              <img src={profileImage} />
            </div>
            <div className="author">
              <p>
                <strong>{blog.primary_author.name}</strong>
              </p>
              <time className="published-at">{blog.published_at_pretty}</time>
            </div>
          </div>
        </div>
      </a>
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
