import React from 'react';
import TestimonialBackground from "../components/backgrounds/TestimonialBackground";

import Slider from "react-slick";
import CloseIcon from "../components/svgr/CloseIcon";
import TestimonialItem from "../components/TestimonialItem";

const Testimonial = (props) => {
    const { id = null } = props;

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        cssEase: "ease-in-out",
    };

    return (
        <section className="relative pt-6 pb-12 sm:pb-24" id={id}>

            <TestimonialBackground/>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-50">

                <h1 className="text-gray-50 text-4xl text-center pt-8" data-aos="zoom-y-out" data-aos-delay="250">
                    Testimonials
                </h1>

                <div className="px-4 py-6 mx-auto md:px-24 lg:px-8 lg:py-8 mt-8" data-aos="zoom-y-out" data-aos-delay="450">
                    <div className="max-w-xl sm:mx-auto lg:max-w-5xl">
                        <Slider
                            {...settings}
                            className="text-center pb-24 pt-12 text-gray-100"
                        >
                            <TestimonialItem
                                text="We prefer member success to do the talking.
                                Take a look at Testimonials to see our clients success."
                                author="Eric B"
                            />

                            <TestimonialItem
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Animi autem consequuntur cupiditate deleniti dolore ducimus."
                                author="Havens"
                            />

                            <TestimonialItem
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Animi autem consequuntur cupiditate deleniti dolore ducimus."
                                author="RU"
                            />


                        </Slider>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Testimonial;
