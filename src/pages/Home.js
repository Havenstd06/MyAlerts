import React from 'react';

import Header from '../partials/Header';
import Features from '../partials/Features';
import Steps from '../partials/Steps';
import Get from "../partials/Get";
import FAQ from "../partials/FAQ";
import StepsBackground from "../components/backgrounds/StepsBackground";
// import Footer from '../partials/Footer';

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />

            {/*  Page content */}
            <main className="flex-grow bg-bluebell">

                {/*  Page sections */}
                <Features />

                <div className="relative min-h-screen pt-6 pb-6 sm:pb-12">
                    <StepsBackground />

                    <Steps />
                    <Get />
                </div>

                <FAQ />

            </main>

            {/*  Site footer */}
            {/*<Footer />*/}

        </div>
    );
}

export default Home;