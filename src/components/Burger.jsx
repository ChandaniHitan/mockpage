import React,{useState} from 'react'
import styled from 'styled-components';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    div{
        width: 2rem;
        height: 0.25 rem;
        background-color: #333;
        border-radius: 10px;
    }
`;

function Burger() {

    const [open, setOpen] = useState(false)
    return (
        <StyledBurger>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}
export default Burger;