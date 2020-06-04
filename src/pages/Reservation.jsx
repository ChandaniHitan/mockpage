import React from 'react'

function Reservation() {
    return (
        <div className="reservation" id="reserveTable">
            <h1>Reservation</h1>
            <div className="reservationBox">
            <div className="reservationWrapper"> 
                <div>
                    <h5>Name</h5>
                    <input></input>
                    <h5>Number of Persons</h5>
                    <div class="dropdown">
                        <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown">1 person
                        </button>
                        <ul className="dropdown-menu">
                            <li><a href="#">2 persons</a></li>
                            <li><a href="#">3 persons</a></li>
                            <li><a href="#">4 persons</a></li>
                            <li><a href="">5+ persons</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5>Email</h5>
                    <input></input>
                    <h5>Date</h5>
                    <input></input>
                </div>
                <div>
                    <h5>Phone</h5>
                    <input></input>
                    <h5>Time</h5>
                    <input></input>
                </div>
            </div>
            <div className="reservationBtn">
            <button type="button" class="btn btn-outline-warning">RESERVE NOW</button>
            </div>
            </div>
        </div>
    )
}
export default Reservation;