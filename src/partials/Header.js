import React from 'react';
import HeaderBackground from "../components/backgrounds/HeaderBackground";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";


const Header = (props) => {
    const { id = null } = props;
    return (
        <header className="bg-gradient-to-t from-bluebell to-bluebell-light md:min-h-screen relative overflow-hidden" id={id}>
                {/*background svg*/}
                <HeaderBackground />

                <div className="relative py-8 sm:pb-8 z-50">
                    <Navbar />

                    <HeroHome />
                </div>
        </header>
    );
}

export default Header;
