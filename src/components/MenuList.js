import React, {useContext} from 'react';

import {
    Container,
    Row
} from 'react-bootstrap';
import Vare from './Vare';

import OrderContext from '../context';

const Menulist = (props) => {
    const {orders, vare} = useContext(OrderContext);
    const {order, setOrder} = orders;
    // eslint-disable-next-line
    const {vares, setVares} = vare;

    const addToOrder = (key) => {
        const tempOrder = {...order};
        tempOrder[key] = tempOrder[key] + 1 || 1;
        setOrder(tempOrder);
    }

    return (
        <section className="vares-screen">
            <Container>
                <Row className="justify-content-center flex-wrap">
                {// eslint-disable-next-line
                Object.keys(vares).map(key => {
                    if(vares[key].type === props.filter){
                        return <Vare key={key} index={key} addtoorder={addToOrder} details={vares[key]} />
                    }
                })}
                </Row>
            </Container>
        </section>
    );
}

export default Menulist;
