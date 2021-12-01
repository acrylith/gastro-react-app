import React from 'react';
import {
    Col
} from 'react-bootstrap'



const Vare = (props) => {
    return (
        <Col md={6} xl={4}>
            <div className="dishcard">
                <div className="dishcard__image">
                    <img src={props.details.image} alt="dish"/>
                    <div className="dishcard__overlay">
                        <div className="dishcard__text">
                            <h4>{props.details.name}</h4>
                            <p>{props.details.contain}</p>
                            <div className="money">
                                <div className="size">
                                    <p>{props.details.caliber.s.size} ({props.details.caliber.s.weight}гр.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dishcard__buy buy">
                    <h4>{props.details.name}</h4>
                    <div className="buy__wrapper">
                        <div className="buy__size">
                            <p>₴{props.details.caliber.s.price}</p>
                            <button className="buy__add" onClick={() => {props.addtoorder(props.index);}}><span className="rotate">+</span>В кошик</button>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default Vare;
