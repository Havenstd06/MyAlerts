import React from 'react';
import Fade from 'react-reveal/Fade';

import FeaturesBackground from "../components/backgrounds/FeaturesBackground";
import FeatureCard from "../components/FeatureCard";
import Phone from "../components/svgr/features-icons/Phone";
import Pin from "../components/svgr/features-icons/Pin";
import Calendar from "../components/svgr/features-icons/Calendar";
import Infobubble from "../components/svgr/features-icons/Infobubble";
import Moneybag from "../components/svgr/features-icons/Moneybag";
import Headphones from "../components/svgr/features-icons/Headphones";

const Features = (props) => {
    const { id = null } = props;

    return (
        <section className="relative min-h-screen 2xl:min-h-0 pt-6 pb-12 sm:pb-24" id={id}>

            <FeaturesBackground/>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-50">

                <Fade>
                    <h1 className="text-gray-50 text-4xl text-center pt-16" data-aos="zoom-y-out" data-aos-delay="250">
                        Features
                    </h1>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

                    <Fade>
                        <FeatureCard svg={<Phone className="ml-2 w-full" />}
                                     title="SMS Notifications"
                                     description="The second it drops, the moment you cop. Simple, Fast, Efficient."
                                     titleBr={true}
                                     descBr={true}
                        />
                    </Fade>

                    <Fade>
                        <FeatureCard svg={<Pin className="w-full" />}
                                     title="Nationwide Coverage, Worldwide Soon"
                                     description="No matter where you're located or what timezone you're in, Alert covers it all."
                        />
                    </Fade>

                    <Fade>
                        <FeatureCard svg={<Calendar className="w-full" />}
                                     title="Daily/Weekly Update"
                                     description="Alert members will receive texts on a weekly and daily basis on the most important information to set you up for success."
                                     titleBr={true}
                        />
                    </Fade>

                    <Fade>
                        <FeatureCard svg={<Infobubble className="w-full" />}
                                     title="Insider Information"
                                     description="Our intricate knowledge of all industries allows us to keep notified of the lasted inside information."
                                     titleBr={true}
                        />
                    </Fade>

                    <Fade>
                        <FeatureCard svg={<Moneybag className="w-full" />}
                                     title="Oriented Flip Access"
                                     description="We cover more than just sneakers - we cover all avenues of profit, with anything from consoles to toys, and everything in between."
                                     titleBr={true}
                        />
                    </Fade>

                    <Fade>
                        <FeatureCard svg={<Headphones className="w-full" />}
                                     title={["24/7", <br/>,  " Support"]}
                                     description="Our support team is active around the clock to ensure all problems are taken care of."
                                     titleBr={true}
                        />
                    </Fade>

                </div>
            </div >
        </section >
    );
}

export default Features;
