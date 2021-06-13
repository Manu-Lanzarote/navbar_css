import styled from "styled-components";
import {Link} from 'react-router-dom'

const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
padding-right: 50px;
z-index: 9;

li{
padding: 20px 15px;
}

.menu{
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
}

@media (max-width: 768px){
flex-flow: column nowrap;
background-color: #4382a093;
position: fixed;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
top: 0;
right: 0;
height: 100vh;
width: 80%;
padding-top: 4rem;
transition: transform 0.3s ease-in-out;

    .menu{
        font-size: 2rem;
    }
}
`

const DropDown = ({open}) => {
    return (
        <Ul open={open}>
            <li>
                <Link to='/' exact className='menu'>
                    HOME
                </Link>
            </li>
            <li>
                <Link to='/services' className='menu'>
                    SERVICES
                </Link>
            </li>
            <li>
                <Link to='/products' className='menu'>
                    PRODUCTS
                </Link>
            </li>
            <li>
                <Link to='/contact' className='menu'>
                    CONTACT US
                </Link>
            </li>
        </Ul>
    )
}

export default DropDown
