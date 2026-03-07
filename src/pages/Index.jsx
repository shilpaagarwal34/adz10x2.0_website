import React, { Suspense, lazy } from 'react'
import "./index.css";
import Banner_slider from './components/banner_slider/Banner_slider.jsx';

const About = lazy(() => import('./components/about/About.jsx'));
const Offering = lazy(() => import('./components/offering/Offering.jsx'));
const Inventory = lazy(() => import('./components/inventory/Inventory.jsx'));
const Brands = lazy(() => import('./components/brands/Brands.jsx'));
const Banner_One = lazy(() => import('./components/banner_1/Banner_One.jsx'));
const Banner_Two = lazy(() => import('./components/banner_2/Banner_Two.jsx'));
const Accordian = lazy(() => import('./components/accordian/Accordian.jsx'));
const Company_logo = lazy(() => import('./components/company_logo/Company_logo.jsx'));

const Index = () => {
    return (
        <>
            <Banner_slider />

            <Suspense fallback={null}>
                <Offering />

                <Inventory />

                <Brands />

                <Banner_One />

                <Banner_Two />

                <About />

                <Accordian />

                <Company_logo />
            </Suspense>

        </>
    )
}

export default Index