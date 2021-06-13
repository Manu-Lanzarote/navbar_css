import React, { useState } from 'react'
import styled from 'styled-components'
import DropDown from './DropDown';

const StyleBurguer = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
right: 2rem;
cursor: pointer;
z-index: 10;
display: none;

@media (max-width: 768px){
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
}

div{
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'pink' : 'white' };
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1){
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2){
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3){
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
}
`;

const Burguer = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
        <StyleBurguer open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyleBurguer>
        <DropDown open={open}/>
        </>
    )
}

export default Burguer
