import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { fetchVares } from '../redux/slices/vareSlice'
import Vare from './Vare';

const ProdSection = styled.section`
    padding: 7em 0;
    background-image: url('./img/wood-bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    h2 {
        font-family: 'Great Vibes';
        color: ${props => props.theme.focus};
        margin: 0;
        line-height: 0.5;
        font-size: 50px;
        text-align: center;
    }
    h1 {
        font-size: 40px;
        font-weight: bold;
        color: ${props => props.theme.text};
        line-height: 1;
        text-transform: uppercase;
        margin: 0;
        text-align: center;
    }
    .text {
        color: ${props => props.theme.subtext};
        font-size: 15px;
        line-height: 1.6;
        margin: 4em 0;
        text-align: center;
    }
    .buttons-wrapper {
        display: flex;
        justify-content: center;
        gap: 2em;
        margin-bottom: 2em;
        button {
            background-color: transparent;
            color: ${props => props.theme.focus};
            font-size: 18px;
            padding: 0.5rem 1rem;
            border: none;
            border-bottom: 1px solid ${props => props.theme.focus};
            transition: all .5s;
            :hover {
                background-color: ${props => props.theme.focus};
                opacity: 0.5;
                color: ${props => props.theme.black};
            }
            :disabled {
                background-color: ${props => props.theme.focus};
                color: ${props => props.theme.black};
                :hover {
                    opacity: initial;
                }
            }
        }
    }
    .column {
        margin-bottom: 2em;
    }
`

export default function Products(props) {
    const dispatch = useDispatch()
    const vares = useSelector(state => state.vares)
    const [type, setType] = useState("pizza")
    const { loc="menu" } = props

    useEffect(() => {
        dispatch(fetchVares(type))// eslint-disable-next-line
    }, [type])

    const list = loc === "home" ? vares.list.slice(0, 3) : vares.list

    return (
        <ProdSection loc={loc}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <h2>Discover</h2>
                        <h1>Our Products</h1>
                        <p className='text'>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            At euismod sociosqu urna parturient venenatis.
                            Venenatis sed nostra placerat netus turpis netus egestas.
                        </p>
                    </div>
                </div>
                
                <div className='buttons-wrapper'>
                    <button disabled={type === "pizza" ? true : false} onClick={() => setType("pizza")}>Pizza</button>
                    <button disabled={type === "sushi" ? true : false} onClick={() => setType("sushi")}>Sushi</button>
                </div>
                <div className='products'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div className='row justify-content-center'>
                                {   vares.isLoading === true ? <h2>Loading...</h2> :
                                    list.map(item =>
                                        <div key={item.id} className='column col-10 col-sm-8 col-md-6 col-lg-4'>
                                            <Vare key={item.id} vare={item} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProdSection>
    )
}