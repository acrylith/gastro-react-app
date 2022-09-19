import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Map from '../components/landing/Map'

const Head = styled.section`
    background-image: url('./img/contacts-bg.jpg');
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

const Contacts = () => {
    document.title = "Gastro | Contacts"
    return (
        <div>
            <Head>
                <div className='container'>
                    <div className='wrapper'>
                        <h2>contacts</h2>
                        <div><NavLink to="/gastro-react-app">home</NavLink> | <span>contacts</span></div>
                    </div>
                </div>
            </Head>
            <Map />
        </div>
    );
}

export default Contacts;
