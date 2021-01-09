import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import HeaderBackground from "./HeaderBackground";
import Navbar from "./Navbar";

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
        <header className="bg-gradient-to-t from-bluebell to-bluebell-light h-screen relative overflow-hidden">
                {/*background svg*/}
                <HeaderBackground />

                <div className="relative pt-6 pb-16 sm:pb-24 z-50">
                    <div className="relative pt-6 pb-16 sm:pb-24">
                        <Navbar />
                    </div>
                </div>
        </header>
    );
}

export default Header;
