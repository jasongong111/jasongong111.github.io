import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" exact component={BlogList} />
                    <Route path="/blog/:id" component={BlogDetail} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;