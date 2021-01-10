import React, { useState, useEffect } from 'react';
import HeaderBackground from "../components/backgrounds/HeaderBackground";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";


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
        <header className="bg-gradient-to-t from-bluebell to-bluebell-light md:min-h-screen relative overflow-hidden">
                {/*background svg*/}
                <HeaderBackground />

                <div className="relative py-14 sm:pb-8 z-50">
                    <Navbar />

                    <HeroHome />
                </div>
        </header>
    );
}

export default Header;
