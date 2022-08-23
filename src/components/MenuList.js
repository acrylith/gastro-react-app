import React, {useEffect} from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { fetchVares } from "../redux/slices/vareSlice"

const Menulist = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchVares(props.filter))// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.filter])

    return (
        <section className="vares-screen">
            <Container>
                <Row className="justify-content-center flex-wrap">

                </Row>
            </Container>
        </section>
    );
}

export default Menulist;
