import React, { Component } from 'react';
import {
    Col
} from 'react-bootstrap'

class Vare extends Component {
    render() {
        return (
            <Col md={6} xl={4}>
                <div className="dishcard">
                    <div className="dishcard__image">
                        <img src={this.props.details.image} alt="dish"/>
                        <div className="dishcard__overlay">
                            <div className="dishcard__text">
                                <h4>{this.props.details.name}</h4>
                                <p>{this.props.details.contain}</p>
                                <div className="money">
                                    <div className="size">
                                        <p>S: {this.props.details.sSize} ({this.props.details.sWeight}гр.)</p>
                                        <p>M: {this.props.details.mSize} ({this.props.details.mWeight}гр.)</p>
                                    </div>
                                    <div className="price">
                                        <p>₴{this.props.details.sPrice}</p>
                                        <p>₴{this.props.details.mPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dishcard__buy buy">
                        <h4>{this.props.details.name}</h4>
                        <div className="buy__wrapper">
                            <div className="buy__size">
                                <p>S: ₴{this.props.details.sPrice}</p>
                                <button className="buy__add"><span className="rotate">+</span>В кошик</button>
                            </div>

                            <div className="buy__size">
                                <p>M: ₴{this.props.details.mPrice}</p>
                                <button className="buy__add"><span className="rotate">+</span>В кошик</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Vare;
