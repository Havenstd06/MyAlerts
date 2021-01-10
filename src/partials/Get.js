import React, { useState, useEffect } from 'react';
import HorizontalScroller from '../utils/HorizontalScroll';
import GetCard from "../components/GetCard";
import Warning from "../components/svgr/for-less-than-icons/Warning";
import Dollar from "../components/svgr/for-less-than-icons/Dollar";
import Pad from "../components/svgr/for-less-than-icons/Pad";
import Book from "../components/svgr/for-less-than-icons/Book";
import Hourglass from "../components/svgr/for-less-than-icons/Hourglass";
import Bell from "../components/svgr/for-less-than-icons/Bell";

function Get() {

    return (
        <div className="relative mx-auto mx-4 pt-12 z-50">
            <h1 className="text-gray-50 text-3xl text-center pt-16" data-aos="zoom-y-out" data-aos-delay="250">
                For Less Than A Cup Of Coffee You Get
            </h1>

            <HorizontalScroller sensibility={10}>
                <div className="w-full flex mt-8 lg:-ml-8 space-x-6" data-aos="zoom-y-out" data-aos-delay="450">
                        <GetCard svg={<Warning />}
                                 title="Shock Drops Coverage"
                                 moreClass="pl-7 md:pl-14"
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
                                 moreClass="pr-7"
                        />
                </div>
            </HorizontalScroller>
        </div>
    );
}

export default Get;
