import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiShoppingCart, HiMenu } from "react-icons/hi"

const NavBar = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`

const Brand = styled(Link)`
    :hover {
        text-decoration: none;
    }
`
const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-content: center;
    align-items: center;
    @media (min-width: 992px) {
        gap: 40px;
    }
`

const NavLink = styled(Link)`
    color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    transition: all .5s;
    :hover {
        color: ${props => props.theme.text};
    }
    @media (min-width: 992px) {
        :hover {
            color: ${props => props.theme.focus};
        }
    }
`

const Links = styled.ul`
    margin: 0;
    padding: 0;
    display: none;
    gap: 40px;
    @media (min-width: 992px) {
        display: flex;
    }
`

const Cart = styled(NavLink)`
    font-size: 22px;
`
const MenuToggle = styled.button`
    display: block;
    border: none;
    background: transparent;
    font-size: 22px;
    color: ${props => props.isOpen ? props.theme.focus : props.theme.text};
    transition: all .5s;
    @media (min-width: 992px) {
        display: none;
    }
`
const NavComponent = styled.nav`
    display: flex;
    flex-direction: column;
    max-height: ${props => props.isOpen ? "336px" : "80px"};
    overflow-y: hidden;
    transition: max-height .4s;
    background-color: ${props => props.theme.black};
    /* ${props => props.path === `${process.env.PUBLIC_URL}` ? `
        @media (min-width: 992px) {
        position: absolute;
        z-index: 2;
        width: 100%;
        background-color: transparent;
        box-shadow: 0 0 2px 0 #f7f7f7;
    }` : null} */
    @media (min-width: 992px) {
        position: absolute;
        z-index: 2;
        width: 100%;
        background-color: transparent;
        box-shadow: 0 0 2px 0 #f7f7f7;
    }
`

const MobLinks = styled.ul`
    margin: 12px 42px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
`

const Navbar = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)

    const burgerToggle = () => {
        if (burgerOpen === false) {
            setBurgerOpen(true)
        } else setBurgerOpen(false)
    }

    return(
        <NavComponent isOpen={burgerOpen}>
            <div className="container">
                <NavBar>
                    <Brand to="/gastro-react-app"><img src="./img/gastro-logo-small.svg" alt="brand" /></Brand>
                    <Nav>
                        <Links>
                            <NavLink to="/gastro-react-app">Home</NavLink>
                            <NavLink to="menu">Menu</NavLink>
                            <NavLink to="services">Services</NavLink>
                            <NavLink to="/gastro-react-app">Blog</NavLink>
                            <NavLink to="about">About</NavLink>
                            <NavLink to="contacts">Contacts</NavLink>
                        </Links>
                        <Cart to="cart"><HiShoppingCart /></Cart>
                        <MenuToggle onClick={() => burgerToggle()} isOpen={burgerOpen}><HiMenu /></MenuToggle>
                    </Nav>
                </NavBar>
            </div>
            <MobLinks>
                <NavLink to="/gastro-react-app">Home</NavLink>
                <NavLink to="menu">Menu</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="/gastro-react-app">Blog</NavLink>
                <NavLink to="/gastro-react-app">About</NavLink>
                <NavLink to="contacts">Contacts</NavLink>
            </MobLinks>
        </NavComponent>
    )
}

export default Navbar;