import React, { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const BurgerMenu = (props) => {
    const { open, onClose } = props;
    const burger = useMemo(() => {
        const element = document.createElement('div');
        return element
    }, []);

    useEffect(() => {
        modalRoot.appendChild(burger);

        return() => {
            modalRoot.removeChild(burger);
        };
    });

    if(open === true) {
        return createPortal(
            <div className="modal">
                <button className="modal__close" onClick={onClose}>&times;</button>
                <ul className="modal__menu">
                    <li className="modal__item">
                        <Link to="/menu" className="modal__link" onClick={onClose}>Меню</Link>
                    </li>
    
                    <li className="modal__item">
                        <Link to="/contacts" className="modal__link" onClick={onClose}>Контакти</Link>
                    </li>
                </ul>
            </div>,
            burger
        )
    } else {
        return null;
    }
}

export default BurgerMenu;
