import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
import FeaturesBackground from "../components/backgrounds/FeaturesBackground";
import FeatureCard from "../components/FeatureCard";
import Phone from "../components/svgr/features-icons/Phone";
import Pin from "../components/svgr/features-icons/Pin";
import Calendar from "../components/svgr/features-icons/Calendar";
import Infobubble from "../components/svgr/features-icons/Infobubble";
import Moneybag from "../components/svgr/features-icons/Moneybag";
import Headphones from "../components/svgr/features-icons/Headphones";

function Features() {

    return (
        <section className="relative min-h-screen pt-6 pb-12 sm:pb-24">

            <FeaturesBackground/>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-50">

                <h1 className="text-gray-50 text-3xl text-center pt-16" data-aos="zoom-y-out" data-aos-delay="250">
                    Features
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 mt-8" data-aos="zoom-y-out" data-aos-delay="450">

                    <FeatureCard svg={<Phone className="ml-2 w-full" />}
                                 title="SMS Notifications"
                                 description="The second it drops, the moment you cop. Simple, Fast, Efficient."
                                 titleBr={true}
                                 descBr={true}
                    />

                    <FeatureCard svg={<Pin className="w-full" />}
                                 title="Nationwide Coverage, Worldwide Soon"
                                 description="No matter where you're located or what timezone you're in, Alert covers it all."
                    />

                    <FeatureCard svg={<Calendar className="w-full" />}
                                 title="Daily/Weekly Update"
                                 description="Alert members will receive texts on a weekly and daily basis on the most important information to set you up for success."
                                 titleBr={true}
                    />

                    <FeatureCard svg={<Infobubble className="w-full" />}
                                 title="Insider Information"
                                 description="Our intricate knowledge of all industries allows us to keep notified of the lasted inside information."
                                 titleBr={true}
                    />

                    <FeatureCard svg={<Moneybag className="w-full" />}
                                 title="Oriented Flip Access"
                                 description="We cover more than just sneakers - we cover all avenues of profit, with anything from consoles to toys, and everything in between."
                                 titleBr={true}
                    />

                    <FeatureCard svg={<Headphones className="w-full" />}
                                 title="24/24 - 7/7 Support"
                                 description="Our support team is active around the clock to ensure all problems are taken care of."
                                 titleBr={true}
                    />

                </div>
            </div >
        </section >
    );
}

export default Features;
