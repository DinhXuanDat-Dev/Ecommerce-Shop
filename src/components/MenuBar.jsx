import styled from "styled-components";
import { mobile } from "../responsive";
import {Routes, Route, Link} from 'react-router-dom'

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
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuBar = () => {
    return(
        <Container>
            <Wrapper>
                <Link to="/">
                    <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/products">
                    <MenuItem>ProductList</MenuItem>
                </Link>
                <Link to="/product">
                    <MenuItem>Product</MenuItem>
                </Link>
                <Link to="/cart">
                    <MenuItem>Cart</MenuItem>
                </Link>
            </Wrapper>
        </Container>
        
    )
}
export default MenuBar