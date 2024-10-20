import React from 'react';
import './Navbar.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <a href='/'>P2P</a>
                </div>

                {/* Wallet Connect Button */}
                <div className='dropdown'>
                    <ConnectButton />
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
