import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burgermenu from "./BurgerMenu";
import Cart from "./Cart";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    let [cartOpen, setCartOpen] = useState(false);
    return(
        <nav>
            <Burgermenu open={mobileOpen} onClose={() => setMobileOpen(false)}/>
            <div className="container">
                <ul className="left">
                    <li className="left__button">
                        <button className="modal__open" onClick={() => setMobileOpen(true)}>
                            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4h12v1.333H2V4Zm0 3.333h12v1.334H2V7.333Zm0 3.334h12V12H2v-1.333Z" fill="#fff"/>
                            </svg>
                        </button>
                    </li>
                    <li className="home">
                        <Link to="/" className="left__link"><img src="./img/gastro-logo-small.png" alt="gastro-logo-small"/></Link>
                    </li>

                    <li className="left__item">
                        <Link to="/menu" href="#" className="left__link">Меню</Link>
                    </li>
                    
                    <li className="left__item">
                        <Link to="/contacts" className="left__link">Контакти</Link>
                    </li>
                </ul>

                <ul className="right">
                    <li className="right__item carticon">
                        <button id="cart-btn" onClick={() => setCartOpen(true)}>
                            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 2a.5.5 0 1 0 0 1h.246a.5.5 0 0 1 .48.363l1.586 5.55A1.5 1.5 0 0 0 6.254 10h4.569a1.5 1.5 0 0 0 1.393-.943l1.474-3.686A1 1 0 0 0 12.762 4H4.448l-.261-.912A1.5 1.5 0 0 0 2.746 2H2.5Zm3.274 6.637L4.734 5h8.027l-1.474 3.686a.5.5 0 0 1-.464.314H6.254a.5.5 0 0 1-.48-.363ZM6.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM10.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z" fill="#fff"/>
                            </svg>
                        </button>
                    </li>
                    <li className="right__item tel">
                        <a href="tel:+380600000000">
                            <svg className="phone-icon" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 14.5h-.085C3.09 13.935 1.695 5.645 1.5 3.115A1.5 1.5 0 0 1 2.88 1.5h2.755a1 1 0 0 1 .93.63L7.325 4a1 1 0 0 1-.22 1.08L6.04 6.155a4.685 4.685 0 0 0 3.79 3.8l1.085-1.075A1 1 0 0 1 12 8.675l1.885.755a1 1 0 0 1 .615.93V13a1.5 1.5 0 0 1-1.5 1.5ZM3 2.5a.5.5 0 0 0-.5.5v.04C2.73 6 4.205 13 12.97 13.5a.5.5 0 0 0 .53-.47v-2.67l-1.885-.755-1.435 1.425-.24-.03C5.59 10.455 5 6.105 5 6.06l-.03-.24 1.42-1.435L5.64 2.5H3Z" fill="#fff"/>
                            </svg>
                            <span className="tel-number">+38 (060) 000 0000</span>
                        </a>
                    </li>
                </ul>
            </div>
            <Cart open={cartOpen} onClose={() => setCartOpen(false)}/>
        </nav>
    )
}

export default Navbar;