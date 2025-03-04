import React, { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map(post => (
                    <BlogPost key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default BlogList;