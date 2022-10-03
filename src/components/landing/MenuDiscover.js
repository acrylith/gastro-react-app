import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useOnScreen from '../../hooks/useOnScreen'

const Menu = styled.section`
    background-image: url('./img/wood-bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 7em 0;
    .text-half {
        text-align: end;
        padding-left: 4em;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        align-items: flex-end;
        h2 {
            font-family: 'Great Vibes';
            color: ${props => props.theme.focus};
            margin: 0;
            line-height: 0.5;
            font-size: 50px;
        }
        h1 {
            font-size: 40px;
            font-weight: bold;
            color: ${props => props.theme.text};
            line-height: 1;
            text-transform: uppercase;
            margin: 0;
        }
        p {
            color: ${props => props.theme.subtext};
            font-size: 15px;
            line-height: 1.6;
            margin: 0;
        }
    }
    img {
        width: 100%;
    }
`
const Masonry = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 2rem;
    @media (min-width: 768px) {
        gap: 0;
        justify-content: space-between;
    }
    @media (min-width: 992px) {
        margin: 0;
    }
    .mItem {
        width: 100%;
        @media (min-width: 768px) {
            width: calc(25% - 1em);
        }
        @media (min-width: 992px) {
            transition: all 1s;
            width: calc(50% - 1em);
            &:nth-child(odd) {
                ${props => props.visible ? 'margin-bottom: 2em;' : null}
            }
            &:nth-child(even) {
                ${props => props.visible ? 'margin-top: 2em;' : null}
            }
        }
    }
`

const MenuLink = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    color: ${props => props.theme.focus};
    border: 1px solid ${props => props.theme.focus};
    padding: 1rem 1.5rem;
    transition: all 0.5s;
    :hover {
        background-color: ${props => props.theme.focus};
        color: ${props=> props.theme.text};
    }
`

export default function MenuDiscover() {
    const masonryRef = useRef()
    const mVisible = useOnScreen(masonryRef, "-60px")
    return (
        <Menu>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='text-half'>
                            <div>
                                <h2>Discover</h2>
                                <h1>Our Menu</h1>
                            </div>
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Donec montes quam penatibus mus vestibulum. Tristique turpis urna diam pharetra scelerisque felis inceptos morbi. Iaculis condimentum praesent augue dui commodo. Vel tempor facilisis, nibh habitant nullam aliquet aptent ultrices.</p>
                            <MenuLink to='/menu'>View Full Menu</MenuLink>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <Masonry visible={mVisible} ref={masonryRef}>
                            <div className='mItem'>
                                <img src='./img/galler-pizza01.jpg' alt='pizza01' />
                            </div>
                            <div className='mItem'>
                                <img src='./img/galler-pizza02.jpg' alt='pizza02' />
                            </div>
                            <div className='mItem'>
                                <img src='./img/galler-pizza04.jpg' alt='pizza03' />
                            </div>
                            <div className='mItem'>
                                <img src='./img/galler-pizza05.jpg' alt='pizza04' />
                            </div>
                        </Masonry>
                    </div>
                </div>
            </div>
        </Menu>
    )
}