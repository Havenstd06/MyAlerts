import React from 'react';
import { Helmet } from "react-helmet";

import Header from '../partials/Header';
import Features from '../partials/Features';
import Steps from '../partials/Steps';
import Get from "../partials/Get";
import FAQ from "../partials/FAQ";
import Testimonial from "../partials/Testimonial";
import StepsBackground from "../components/backgrounds/StepsBackground";
import Footer from '../partials/Footer';
import Logo from '../images/logo-500-676.png'

// Favicon
import AppleTouchIcon from '../images/favicon/apple-touch-icon.png';
import Favicon32x32 from '../images/favicon/favicon-32x32.png';
import Favicon16x16 from '../images/favicon/favicon-16x16.png';
import SiteWebmanifest from '../images/favicon/site.webmanifest';
import SafariPinnedTab from '../images/favicon/safari-pinned-tab.svg';

function Home() {
    return (
        <div className="application">
            <Helmet>
                <title>MyAlerts</title>
                <meta name="author" content="Havens" data-react-helmet="true"/>
                <meta name="description" content="Don’t Miss Releases With MyAlerts." data-react-helmet="true" />
                <meta name="keywords" content="Alerts, MyAlerts, Notifications" data-react-helmet="true" />


            </Helmet>
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header id="home" />

                {/*  Page content */}
                <main className="flex-grow bg-bluebell z-40">

                    {/*  Page sections */}
                    <Features id="features" />

                    <div className="relative min-h-screen pt-6 pb-6 sm:pb-12">
                        <StepsBackground />

                        <Steps id="steps" />
                        <Get id="get" />
                    </div>

                    <FAQ id="faq" />

                    <Testimonial id="testimonial" />

                </main>

                {/*  Site footer */}
                <Footer id="footer" />

            </div>
        </div>
    );
}

export default Home;