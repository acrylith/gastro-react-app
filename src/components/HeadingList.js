import React, { Component } from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';

import headVares from '../headvares'
import Vare from './Vare';

class Headinglist extends Component {
    state = {
        vares: headVares
    }

    render() {
        return (
            <section className="main">
                <Container>
                    <Row className="justify-content-center flex-wrap">
                        {Object.keys(this.state.vares).map(key => {
                            return <Vare
                            key={key}
                            details={this.state.vares[key]}
                            />
                        })}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Headinglist;
