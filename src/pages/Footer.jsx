import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer" id="contactInfo">
            <div className="footerGrid">
                <div>
                <h4>About Meal</h4>
                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                <button type="button" class="btn btn-outline-warning">READ MORE </button>
                </div>
                <div>
                <h4>Lunch Service</h4>
                <p>Booking from 12:00pm — 1:30pm</p>
                <h4>Dinner Service</h4>
                <p>Everyday:</p>
                <p>Booking from 6:00pm — 9:00pm</p>
                </div>
                <div>
                <h4>Follow Along</h4>
                <div className="soMe">
                <div><a href="" className="tripadviser"><i class="fab fa-tripadvisor" style={{color:"white"}}></i></a></div>
                <div><a href="" className="twitter"><i class="fab fa-twitter" style={{color:"white"}}></i></a></div>
                <div><a href="" className="facebook"><i class="fab fa-facebook-f" style={{color:"white"}}></i></a></div>
                <div><a href="" className="instagram"><i class="fab fa-instagram" style={{color:"white"}}></i></a></div>
                </div>
                <h4>Newsletter</h4>
                <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Enter Email"
                    aria-label="Search"></input>
                </div>
            </div>
            <p className="copyright">Copyright ©{year} All rights reserved</p>
        </div>
    )
}
export default Footer;