import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(54, 19, 84, .6);
  a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
  ${mobile({ padding: "10px 0px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink  = styled(Link)`
  padding: 10px;
  color: #fff;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    z-index: -1;
    background-color: #21406c;
    transition: width 0.5s ease;
  }
  &:hover:before{
    /* color: rgba(54,19,84,.6); */
    width: 100%;
  }
`;

const MenuBar = () => {
    return(
        <Container>
            <Wrapper>
                <StyledLink to="/">
                    <MenuItem>Home</MenuItem>
                </StyledLink>
                <StyledLink to="/products">
                    <MenuItem>ProductList</MenuItem>
                </StyledLink>
                <StyledLink to="/product">
                    <MenuItem>Product</MenuItem>
                </StyledLink>
                <StyledLink to="/cart">
                    <MenuItem>Cart</MenuItem>
                </StyledLink>
            </Wrapper>
        </Container>
        
    )
}
export default MenuBar