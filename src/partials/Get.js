import React, { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import GetCard from "../components/GetCard";
import Warning from "../components/svgr/for-less-than-icons/Warning";
import Dollar from "../components/svgr/for-less-than-icons/Dollar";
import Pad from "../components/svgr/for-less-than-icons/Pad";
import Book from "../components/svgr/for-less-than-icons/Book";
import Hourglass from "../components/svgr/for-less-than-icons/Hourglass";
import Bell from "../components/svgr/for-less-than-icons/Bell";

const Get = (props) => {
    const { id = null } = props;

    const settings = {
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out"
    };

    return (
        <div className="relative mx-auto mx-4 pt-12 z-50" id={id}>
            <h1 className="text-gray-50 text-4xl text-center pt-16" data-aos="zoom-y-out" data-aos-delay="250">
                For Less Than A Cup Of Coffee You Get
            </h1>
            <div className="mt-8" data-aos="zoom-y-out" data-aos-delay="450">

                <Slider
                    {...settings}
                >

                    <GetCard svg={<Warning />}
                             title="Shock Drops Coverage"
                    />

                    <GetCard svg={<Dollar />}
                             title="Profitable Finds"
                    />

                    <GetCard svg={<Pad />}
                             title="Daily Release Schedule"
                    />

                    <GetCard svg={<Book />}
                             title="Weekly Release Schedule"
                    />

                    <GetCard svg={<Hourglass />}
                             title="Drop Time Reminders"
                    />

                    <GetCard svg={<Bell />}
                             title="No More “FOMO” on Drops"
                    />

                </Slider>
            </div>

        </div>
    );
}

export default Get;
