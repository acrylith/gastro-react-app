import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Advantages from '../components/landing/Advantages'

const Head = styled.section`
    background-image: url('./img/services-bg.jpg');
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

export default function Services() {
    document.title = "Gastro | Services"
    return (
        <div>
            <Head>
                <div className='container'>
                    <div className='wrapper'>
                        <h2>services</h2>
                        <div><NavLink to="/gastro-react-app">home</NavLink> | <span>services</span></div>
                    </div>
                </div>
            </Head>
            <Advantages />
        </div>
    )
}