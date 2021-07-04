import React from 'react'

import Browser from './Browser'
import Navigation from './Navigation';

const Header = () =>{

    return(
        <header id='headerComponent' >
            <Browser />
            <Navigation />
        </header>
    );
}
export default Header;