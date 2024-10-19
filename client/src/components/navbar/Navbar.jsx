import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <a href='/'>P2P</a>
                </div>

                {/* Dropdown button */}
                <div className='dropdown'>
                    <button onClick={toggleDropdown} className='dropdown-button'>
                        Layers
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className='dropdown-menu'>
                            <a href='/orders' className='dropdown-item'>
                                Orders
                            </a>
                            <a href='/neworders' className='dropdown-item'>
                                New Orders
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
