import React, {useContext} from 'react';

import {
    Container,
    Row
} from 'react-bootstrap';
import Vare from './Vare';

import varesList from '../vares';

import OrderContext from '../context';

const Menulist = (props) => {
    let vares = varesList;
    const cntxt = useContext(OrderContext);

    const addToOrder = (key) => {
        const order = {...cntxt.order};
        order[key] = order[key] + 1 || 1;
        cntxt.setOrder(order);
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
