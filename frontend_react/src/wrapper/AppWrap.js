import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia />
            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <div>
                        <p className="p-text">Total visitors count: <img src="https://hitwebcounter.com/counter/counter.php?page=7953843&style=0011&nbdigits=6&type=page&initCount=0" title="Free Counter" alt="web counter"   border="0" /></p>
                    </div>
                    <p className="p-text">Copyright@2022 Raviganesh M</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    );
};

export default AppWrap;
