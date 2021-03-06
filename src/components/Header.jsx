import React from 'react'

function Header() {


    return (
        <div>
        <nav className="navbar fixed-top navbar-light bg-light">
            <a className="navbar-brand mx-auto" href="">M</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#aboutUs">About Us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#ourMenu">Our Menu</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#reserveTable">Reserve A Table</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contactInfo">Contact</a>
                    </li>

                </ul>
                
            </div>
            </nav>
           
        </div>

    )
}

export default Header;