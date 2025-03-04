import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from './BlogList';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Computer Science Blog</h1>
                <p>Explore my thoughts, projects, and tutorials on various computer science topics.</p>
                <BlogList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;