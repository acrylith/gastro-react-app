import React, { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Cart = (props) => {
    let { open, onClose } = props;
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

    if(open === true) {
        return createPortal(
            <div className="cart">
                <button className="cart__close" onClick={onClose}>&times;</button>
                <div className="container flex-column justify-content-start">
                    <div className="cart__list">
                        
                    </div>
                    <div className="cart__check">
                        <p>До сплати (доставка ₴50):</p>
                        <p>₴455</p>
                    </div>
                </div>
            </div>,
            cart
        )
    } else {
        return null;
    }
    
}

export default Cart;