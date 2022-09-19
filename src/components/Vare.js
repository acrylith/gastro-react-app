import React from 'react';
import { useDispatch } from 'react-redux';
import { vareAdd } from '../redux/slices/cartSlice';
import styled from 'styled-components';

const Card = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .img {
        height: 300px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    h3 {
        text-align: center;
        color: ${props => props.theme.text};
        margin: 0.5rem 0;
    }
    p {
        color: ${props => props.theme.subtext};
        font-size: 15px;
        line-height: 1.6;
        margin: 1em 0;
        text-align: center;
        flex-grow: 1;
    }
    .sizes {
        display: flex;
    }
    .cal {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h5 {
        color: ${props => props.theme.focus};
        text-align: center;
    }
    strong {
        color: ${props => props.theme.text};
        font-size: 18px;
        text-align: center;
        margin-bottom: 0.5em;
    }
    button {
        font-size: 14px;
        color: ${props => props.theme.focus};
        padding: 0.5rem 1rem;
        background-color: transparent;
        border: 1px solid ${props => props.theme.focus};
        transition: all .5s ease-in-out;
        :hover {
            background-color: ${props => props.theme.focus};
            color: ${props => props.theme.text};
        }
    }
`


const Vare = (props) => {
    const dispatch = useDispatch()
    const { name, image, contain, caliber } = props.vare

    const addToCart = (vare) => {
        dispatch(vareAdd(vare))
    }
    
    return (
        <Card>
            <div className='img'>
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{contain}</p>
            <div className='sizes'>
                {
                    caliber.map(cal => {
                        return <div key={cal.title} className='cal'>
                            <h5>{cal.size} <span>({cal.weight})</span></h5>
                            <strong>{cal.price}£</strong>
                            <button onClick={() => addToCart({info: props.vare, size: cal.title})}>Add to Cart</button>
                        </div>
                    })
                }
            </div>
        </Card>
    );
}

export default Vare;
