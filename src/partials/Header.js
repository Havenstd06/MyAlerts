import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderBackground from "./HeaderBackground";

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
        <header className="bg-gradient-to-t from-bluebell to-bluebell-light h-screen">
            <HeaderBackground />
        </header>
    );
}

export default Header;
