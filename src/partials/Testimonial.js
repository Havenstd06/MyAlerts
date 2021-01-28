import React from 'react';
import TestimonialBackground from "../components/backgrounds/TestimonialBackground";

import Slider from "react-slick";
import TestimonialItem from "../components/TestimonialItem";
import Fade from "react-reveal/Fade";

const Testimonial = (props) => {
    const { id = null } = props;

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease-in-out",
    };

    return (
        <section className="relative pt-6 pb-12 sm:pb-24" id={id}>

            <TestimonialBackground/>

            <div className="relative md:max-w-7xl mx-auto px-4 sm:px-6 z-50">

                <div className="max-w-xl mx-auto text-center pt-8 text-gray-50">
                    <Fade>
                        <h1 className="text-4xl">
                            Testimonials
                        </h1>
                    </Fade>

                    <Fade>
                        <h4 className="text-lg pt-4">
                            We prefer member success to do the talking.
                            Take a look at Testimonials to see our clients success.
                        </h4>
                    </Fade>
                </div>

                <Fade>
                    <div className="px-4 py-6 lg:px-8 lg:py-8 mt-8">
                        <Slider
                            {...settings}
                            className="text-center py-6 text-gray-100"
                        >
                            <TestimonialItem
                                text="MyAlerts helped me cook 3 PS5s off Walmart and Sony and 5 Xbox’s. I made over $1,500 of this alone."
                                author="Wavers"
                            />

                            <TestimonialItem
                                text="I joined for the Shock Drops, but have continued to stay for everything else. Can’t imagine reselling without MyAlerts!"
                                author="303Hype"
                            />

                            <TestimonialItem
                                text="I always wanted to get into reselling but I never when to buy products when they are sold out all the time. MyAlerts Texts really helped me to stay updated with releases and now I never miss anymore drops."
                                author="Hoody"
                            />

                        </Slider>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Testimonial;
