import React, { useEffect } from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import { Sugar } from './utils/preloader';

import './css/App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './pages/Home';

function App() {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    });

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Home />
                    <Sugar background="linear-gradient(180deg, #15152D 0%, #2A2B6E 100%)" color={'#9DB4FF'} />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
