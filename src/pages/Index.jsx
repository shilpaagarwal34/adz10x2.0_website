import React from 'react'
import "./index.css";
import Accordian from './components/accordian/Accordian.jsx';
import Banner_Two from './components/banner_2/Banner_Two.jsx';
import Banner_One from './components/banner_1/Banner_One.jsx';
import Offering from './components/offering/Offering.jsx';
import About from './components/about/About.jsx';
// import Company_logo from './components/company_logo/Company_logo.jsx';
import Banner_slider from './components/banner_slider/Banner_slider.jsx';

const Index = () => {
    return (
        <>
            <Banner_slider />

            <About />

            <Offering />

            <Banner_One />

            <Banner_Two />

            <Accordian />

            {/* <Company_logo /> */}

        </>
    )
}

export default Index