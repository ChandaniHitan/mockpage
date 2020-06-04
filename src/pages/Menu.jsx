import React from 'react'

function Menu() {
    return (
        <div className="menu" id="ourMenu">
            <h1>Menu</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="menuSelect">
            <a href="">BREAKFAST</a>
            <a href="">BRUNCH</a>
            <a href="">DINNER</a>
        </div>
        <div className="menuWrapper">
            <div>
                <img src="./images/food1.jpg"></img>
                <h5>Warm Spinach Dip & Chips</h5>
                <p>Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.</p>
            </div>
            <div style={{color:"#FF7A5B"}}>$10.49</div>
        </div>

        <div className="menuWrapper">
            <div>
                <img src="./images/food2.jpg"></img>
                <h5>Key Wast Machos</h5>
                <p>Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.</p>
            </div>
            <div style={{color:"#FF7A5B"}}>$10.49</div>
        </div>

        <div className="menuWrapper">
            <div>
                <img src="./images/food3.jpg"></img>
                <h5>Lobster & Shrimp Quesadilla</h5>
                <p>Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.

</p>
            </div>
            <div style={{color:"#FF7A5B"}}>$10.49</div>
        </div>
        </div>
    )
}
export default Menu;