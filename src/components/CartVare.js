import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { vareDecrease, vareIncrease, vareRemove } from '../redux/slices/cartSlice'

const Vare = styled.tr`
    img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
    .quantity {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .size {
            display: flex;
            gap: 12px;
        }
        strong {
            width: 20px;
        }
        .counter {
            display: flex;
            gap: 8px;
            justify-content: space-between;
            .number {
                width: 20px;
                text-align: center;
            }
        }
    }
    td {
        text-align: center;
        vertical-align: center;
        padding: 40px 10px;
    }
    button {
        background: transparent;
        border: 1px solid gray;
        color: ${props => props.theme.text};
        padding: 0;
        width: 22px;
        height: 22px;
        line-height: 1;
        transition: .3s all;
        :hover {
            background-color: ${props => props.theme.focus};
        }
    }
    h4 {
        margin: 0;
    }
`

export default function CartVare(props) {
    const { id, name, image, caliber, quantity } = props.vare
    const dispatch = useDispatch()

    const increase = (vare) => {
        dispatch(vareIncrease(vare))
    }

    const decrease = (vare) => {
        dispatch(vareDecrease(vare))
    }

    const remove = (id) => {
        dispatch(vareRemove(id))
    }

    return (
        <Vare>
            <td className='vare-remove'><button onClick={() => remove(id)}>&#215;</button></td>
            <td className='vare-img'>
                <img src={image} alt={name} />
            </td>
            <td className='prod-name'>
                <h4>{name}</h4>
            </td>
            <td>
                <div className='quantity'>
                    <div className='size'>
                        <strong>S:</strong>
                        <div className='counter'>
                            <button onClick={() => decrease({id: id, size: "s"})}>-</button>
                            <span className='number'>{quantity.s}</span>
                            <button onClick={() => increase({id: id, size: "s"})}>+</button>
                        </div>
                        <span className='price'>&#215; £{caliber[0].price}</span>
                    </div>
                    <div className='size'>
                        <strong>M:</strong>
                        <div className='counter'>
                            <button onClick={() => decrease({id: id, size: "m"})}>-</button>
                            <span className='number'>{quantity.m}</span>
                            <button onClick={() => increase({id: id, size: "m"})}>+</button>
                        </div>
                        <span className='price'>&#215; £{caliber[1].price}</span>
                    </div>
                </div>
            </td>
            <td className='total'>
                <h4>£{quantity.s * caliber[0].price + quantity.m * caliber[1].price}</h4>
            </td>
        </Vare>
    )
}