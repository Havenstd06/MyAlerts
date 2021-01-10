import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import HeaderBackground from "../components/HeaderBackground";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";


function Header() {

    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <header className="bg-gradient-to-t from-bluebell to-bluebell-light min-h-screen relative overflow-hidden">
                {/*background svg*/}
                <HeaderBackground />

                <div className="relative pt-6 pb-6 sm:pb-8 z-50">
                    <Navbar />

                    <HomeSection />
                </div>
        </header>
    );
}

export default Header;
