import React from 'react';
import logo from '../Navbar/transaction-48.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-color">
                <div className="container">
                    <img src={logo} id='logo' alt="Site Logo" />
                    <Link className="navbar-brand text-white" href="#">Transaction APP</Link>
                </div>
            </nav>
        </>
    )
};
