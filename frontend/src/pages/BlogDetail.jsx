import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

const BlogDetail = () => {
    const { id } = useParams();
    
    // Fetch the blog post details using the id
    const [post, setPost] = React.useState(null);
    
    React.useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/posts/${id}`);
            const data = await response.json();
            setPost(data);
        };
        
        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="blog-detail">
            <h1>{post.title}</h1>
            <BlogPost content={post.content} />
        </div>
    );
};

export default BlogDetail;