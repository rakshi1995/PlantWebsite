import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from "../components/Header";
import Body from "../components/Body";
import Categories from "../components/Categories";
import Featured from "../components/featured";
import Blog from "../components/blog";
import Subscribe from "../Subscribe";
import Footer from "../components/footer";

const Home = () => {
    return (
        <>
            <Header />
            <Body />
            <Categories />
            <Featured />
            <Blog />
            <Subscribe />
            <Footer />
        </>
    );
};

export default Home;