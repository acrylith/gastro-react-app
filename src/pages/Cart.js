import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartVare from '../components/CartVare'

const CartSection = styled.section`
    padding: 7em 0;
    background-image: url('./img/wood-bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${props => props.theme.text};
`
const Head = styled.section`
    background-image: url('./img/cart-bg.jpg');
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

const Table = styled.table`
    width: 100%;
    min-width: 600px;
    overflow: scroll;
`
const THead = styled.thead`
    background-color: ${props => props.theme.focus};
    th {
        padding: 20px 10px;
        font-weight: 500;
        text-align: center;
    }
`
const Body = styled.tbody`
    h5 {
        text-align: center;
        margin: 1.5em 0;
    }
`

export default function Cart() {
    document.title = "Gastro | Cart"
    const list = useSelector(state => state.cart.list)
    return (
        <div>
            <Head>
                <div className='container'>
                    <div className='wrapper'>
                        <h2>cart</h2>
                        <div><NavLink to="/gastro-react-app">home</NavLink> | <span>cart</span></div>
                    </div>
                </div>
            </Head>
            <CartSection>
                <div className='container'>
                    <div style={{overflowX: "auto"}}>
                        <Table>
                            <THead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </THead>
                            <Body>
                                {
                                    list.length > 0 ? list.map(item => <CartVare key={item.id} vare={item} />) : 
                                    <tr>
                                        <td colSpan="5">
                                            <h5>Cart is Empty</h5>
                                        </td>
                                    </tr>
                                }
                            </Body>
                        </Table>
                    </div>
                </div>
            </CartSection>
        </div>
    )
}