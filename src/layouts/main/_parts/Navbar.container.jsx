import React from 'react';
import styles from './Navbar.container.scss';

export default function Navbar() {
return (
    <div>
        <nav className="navbar navbar-default" styleName="ptt-navbar">
            <div className="container">
                <div className="navbar-header" styleName="site-name">Test
                </div>
                <p className="navbar-text navbar-right" styleName="user-info">Signed in as </p>
            </div>
        </nav>
    </div>
    );
};
