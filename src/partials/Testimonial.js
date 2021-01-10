import React from 'react';
import TestimonialBackground from "../components/backgrounds/TestimonialBackground";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CloseIcon from "../components/svgr/CloseIcon";

const Testimonial = (props) => {
    const { id = null } = props;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
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
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            infinite={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="transition duration-200 ease-in-out"
                            transitionDuration={500}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style text-gray-100"
                            className="text-center pb-24 pt-12 text-gray-100"
                        >
                            <div className="max-w-2xl mx-auto">
                                We prefer member success to do the talking. Take a look at Testimonials to see our clients success.
                            </div>

                            <div className="max-w-2xl mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi deserunt dignissimos eaque eius, error est illum ipsam laborum, magnam maiores natus provident quidem quo saepe totam vel, vero voluptates.
                            </div>

                            <div className="max-w-2xl mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere possimus quia repellat unde. Debitis eaque exercitationem expedita fuga fugit ipsa magni necessitatibus numquam odit quidem sed sequi, sit sunt!
                            </div>

                            <div className="max-w-2xl mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi culpa dolore enim, ipsam mollitia nostrum quisquam reiciendis veniam vero. Debitis delectus deleniti et, porro quas repudiandae veniam! Quibusdam, quo?
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Testimonial;
