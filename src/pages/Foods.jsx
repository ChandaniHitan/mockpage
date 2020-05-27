import React from 'react'

function Foods() {
    return (
        <div className="aboutFoods">
            <div>
            <h1>Find your best food</h1>
            <p>Satisfy the passion for the perfect taste</p>
            </div>
            <div className="wrapper">
               <div className="foodDescription">
                    <h6>VEGGIES</h6>
                    <h4>BEEF EMPANADAS</h4>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <a href="">LEARN MORE</a>
               </div>
            </div>
            <div className="wrapper">
               <div className="foodDescription">
                    <h6>FOOD</h6>
                    <h4>BUTTERMILK CHICKEN JIBARITOS</h4>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <a href="">LEARN MORE</a>
               </div>
            </div>
            <div className="wrapper">
               <div className="foodDescription">
                    <h6>FOOD</h6>
                    <h4>CHICKEN CHIMICHURRI CROQUETTES</h4>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                    <a href="">LEARN MORE</a>
               </div>
            </div>
        </div>
    )
}
export default Foods;