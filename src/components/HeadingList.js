import React, { useState, useContext } from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';

import headVares from '../headvares'
import OrderContext from '../context';

import Vare from './Vare';

const Headinglist = (props) => {
    const [headVares] = useState({});
    const cntxt = useContext(OrderContext);

    const addToOrder = (key) => {
        const order = {...cntxt.order};
        order[key] = order[key] + 1 || 1;
        cntxt.setOrder(order);
    }

    return (
        <section className="main">
            <Container>
                <Row className="justify-content-center flex-wrap">
                    {Object.keys(headVares).map(key => {
                        
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Headinglist;
