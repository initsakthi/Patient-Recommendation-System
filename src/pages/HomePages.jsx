import React from 'react'
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import Blog from "../components/Blog";
import Book from "../components/Book";
import Slider from "../components/Carousel";
import Features from "../components/Features";

const Home = () => {
    return (
        <>
            <Slider />
            <Book />
            <About />
            <Services />
            <Features />
            <Pricing />
            <Team />
            <Blog />
        </>
    )
}

export default Home