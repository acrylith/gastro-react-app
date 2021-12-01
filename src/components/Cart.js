import React, { useMemo, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import emailjs from 'emailjs-com';

import OrderContext from '../context';

const modalRoot = document.querySelector('#modal-root');

const Cart = (props) => {
    let { open, onClose } = props;
    const {orders, vare} = useContext(OrderContext);
    const {order, setOrder} = orders;
    // eslint-disable-next-line
    const {vares, setVares} = vare;

    const cart = useMemo(() => {
        const element = document.createElement('div');
        return element
    }, []);

    useEffect(() => {
        modalRoot.appendChild(cart);

        return() => {
            modalRoot.removeChild(cart);
        };
    });

    const orderIds = Object.keys(order);

    const totalPrice = orderIds.reduce((prevTotal, key) => {
        const dish = vares[key];
        const count = order[key];

        return prevTotal + dish.price * count;
    }, 0)

    const deleteFromOrder = (key) => {
        // 1. Делаем копию объекта state
        // const order = { ...this.state.order };
        const tempOrder = {...order};
        // 2. Удаляем burger
        delete tempOrder[key];
        // 3. Записать наш новый объект order в state
        // this.setState({ order });
        setOrder(tempOrder);
    };

    let nameValue, addressValue, numberValue;

    const sendOrder = () => {
        let list = {
            orderList: {...order},
            total: totalPrice,
            name: nameValue,
            address: addressValue,
            number: numberValue
        }

        let templateParams = {
            message: JSON.stringify(list)
        };

        emailjs.send('service_5ct0bpu', 'template_heven7v', templateParams, 'user_2CDTh4gAX1genpyqwZ7dP')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }

    const renderItem = (key) => {
        const selectedVare = vares[key];
        const count = order[key];

        return (
            <div key={key} className="cart__item">
                <div className="cart__image">
                    <img src={selectedVare.image} alt={selectedVare.name}/>
                </div>
                <p>{selectedVare.name}</p>
                <p>{count} шт.</p>
                <p>₴{selectedVare.price}</p>
                <button onClick={() => deleteFromOrder(key)}>&#10006;</button>
            </div>
        )
    }

    if(open === true) {
        return createPortal(
            <div className="cart">
                <h1>Кошик</h1>
                <button className="cart__close" onClick={onClose}>&times;</button>
                <div className="container flex-column justify-content-start">
                    <div className="cart__list">
                        {orderIds.map(renderItem)}
                    </div>
                    <div className="cart__check">
                        <p>До сплати:</p>
                        <p>₴{totalPrice}</p>
                    </div>
                </div>
                <div className="cart__send">
                    <input
                        type="text"
                        onChange={(e) => {nameValue = e.target.value}}
                        placeholder="Введіть Ваше ім'я">
                    </input>
                    <input
                        type="text"
                        onChange={(e) => {addressValue = e.target.value}}
                        placeholder="Введіть адресу">
                    </input>
                    <input
                        type="text"
                        onChange={(e) => {numberValue = e.target.value}}
                        placeholder="Введіть номер телефону">
                    </input>
                    <button onClick={sendOrder}>Замовити</button>
                </div>
            </div>,
            cart
        )
    } else {
        return null;
    }
    
}

export default Cart;