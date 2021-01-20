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

                {/*Twitter*/}
                <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
                <meta name="twitter:title" content="MyAlerts" data-react-helmet="true" />
                <meta name="twitter:description" content="Don’t Miss Releases With MyAlerts." data-react-helmet="true" />
                <meta name="twitter:site" content="@ALERTS_IO" data-react-helmet="true" />
                <meta name="twitter:creator" content="@ALERTS_IO" data-react-helmet="true" />
                <meta name="twitter:image" content={Logo} data-react-helmet="true" />

                {/*Open Graph general (Facebook, Pinterest)*/}
                <meta property="og:title" content="MyAlerts" data-react-helmet="true" />
                <meta property="og:description" content="Don’t Miss Releases With MyAlerts." data-react-helmet="true" />
                <meta property="og:url" content="https://myalerts.io" data-react-helmet="true" />
                <meta property="og:site_name" content="myalerts.io" data-react-helmet="true" />
                <meta property="og:type" content="website" data-react-helmet="true" />
                <meta property="og:image" content={Logo} data-react-helmet="true" />

                {/*Favicon*/}
                <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} data-react-helmet="true" />
                <link rel="icon" type="image/png" sizes="32x32" href={Favicon32x32} data-react-helmet="true" />
                <link rel="icon" type="image/png" sizes="16x16" href={Favicon16x16} data-react-helmet="true" />
                <link rel="manifest" href={SiteWebmanifest} data-react-helmet="true" />
                <link rel="mask-icon" href={SafariPinnedTab} color="#5bbad5" data-react-helmet="true" />
                <meta name="msapplication-TileColor" content="#da532c" data-react-helmet="true" />

                <meta name="viewport" content="width=device-width, initial-scale=1" data-react-helmet="true" />
                <meta name="theme-color" content="#ffffff" data-react-helmet="true" />
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