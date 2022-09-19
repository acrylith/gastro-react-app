import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Products from '../components/Products';

const Head = styled.section`
    background-image: url('./img/menu-bg.jpg');
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    height: 750px;
    display: flex;
    align-items: center;
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        color: ${props => props.theme.text};
        text-transform: uppercase;
    }
    span {
        color: ${props => props.theme.subtext};
        cursor: default;
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

const Menu = () => {
    document.title = "Gastro | Menu"
    return (
        <div>
            <Head>
                <div className='container'>
                    <div className='wrapper'>
                        <h2>menu</h2>
                        <div><NavLink to="/gastro-react-app">home</NavLink> | <span>menu</span></div>
                    </div>
                </div>
            </Head>
            <Products />
        </div>
    );
}

export default Menu;