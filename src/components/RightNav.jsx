import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li{
    padding: 18px 10px;
    }
    
    @media(max-width: 768px){
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;

    li{
        color: #fff;
    }
}
`;


function RightNav() {
    return (
        
           <Ul class="nav navbar-nav">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our menu</li>
                    <li>Reserve A Table</li>
                    <li>Contact</li>
            </Ul> 
       
    )
}
export default RightNav;