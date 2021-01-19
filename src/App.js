import React, { useEffect } from 'react';
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom';

import './css/App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    );
}

export default App;
