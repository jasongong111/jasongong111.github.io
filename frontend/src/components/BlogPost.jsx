import React from 'react';

const BlogPost = ({ title, content, author, date }) => {
    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <p className="blog-post-meta">
                Posted by {author} on {new Date(date).toLocaleDateString()}
            </p>
            <div className="blog-post-content">
                {content}
            </div>
        </div>
    );
};

export default BlogPost;