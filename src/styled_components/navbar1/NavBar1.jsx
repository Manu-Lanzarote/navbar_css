import styled from "styled-components";
import Burguer from './Burguer';

const Nav = styled.nav`
width: 100%;
height: 50px;
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #000000;
position: fixed;

.logo{
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

`
const NavBar1 = () => {
    return (
        <Nav>
            <div className="logo">
                PAULA
            </div>
            <Burguer/>
        </Nav>
    )
}

export default NavBar1
