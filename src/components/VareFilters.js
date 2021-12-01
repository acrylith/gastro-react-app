import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Varefilters extends Component {
    changeFilter = (value) => {
        this.props.filterUpdate(value);
    }

    render() {
        return (
            <section className="filter">
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={8} xl={4}>
                            <div className="filter__wrapper">
                                <button className="filter__button" filtervalue="pizza" onClick={() => this.changeFilter('pizza')}>
                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 10.99a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 1.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 3.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 4.66c0-1.497 1.23-2.805 2.82-2.648A20.782 20.782 0 0 1 21.262 8.84c1.07 1.193.737 2.964-.479 3.845-1.582 1.148-3.94 2.857-5.283 3.833-.002.437-.002.721-.001 1.092v.628a1.75 1.75 0 0 1-2.056 1.724c-.204.826-.932 1.527-1.944 1.527-.7 0-1.262-.335-1.609-.815l-1.325.957c-1.488 1.074-3.57.011-3.569-1.826L5 4.661V4.66Zm2.673-1.155c-.609-.06-1.174.443-1.174 1.155v.52a17.547 17.547 0 0 1 12.985 6.594l.419-.304c.578-.42.652-1.173.242-1.63A19.282 19.282 0 0 0 7.673 3.506v-.001Zm-1.177 16.3a.75.75 0 0 0 1.19.608l2.128-1.534a.75.75 0 0 1 1.188.61c0 .27.209.5.497.5a.496.496 0 0 0 .502-.5v-1.252a.75.75 0 1 1 1.5 0 .248.248 0 0 0 .425.177.25.25 0 0 0 .073-.177v-.622c-.001-.47-.002-.808.005-1.489a.75.75 0 0 1 .308-.6c.902-.656 2.496-1.812 3.956-2.87a16.04 16.04 0 0 0-11.77-5.974l-.002 13.123Z" fill="#fff"/>
                                    </svg>
                                    Pizza
                                </button>

                                <button className="filter__button" filtervalue="sushi" onClick={() => this.changeFilter('sushi')}>
                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#a)">
                                            <path d="M8.8 4.8a.8.8 0 0 0-.8.8H4.4a4.39 4.39 0 0 0-2.891 7.7A3.198 3.198 0 0 0 0 16c0 1.76 1.44 3.2 3.2 3.2H16c1.76 0 3.2-1.44 3.2-3.2 0-.78-.298-1.488-.768-2.043l3.483 1.54a1.2 1.2 0 1 0 .97-2.195l-2.896-1.283 2.608-.435a1.2 1.2 0 1 0-.394-2.368l-3.408.568c-.782-1.86-2.734-3.73-5.995-4.104V5.6a.8.8 0 0 0-.8-.8H8.8Zm.8 1.6h1.6v11.2H9.6V6.4Zm5.6 6.4a.79.79 0 0 1 .784.72l.122-.214a.799.799 0 0 1 1.468.19.801.801 0 0 1-.083.61l-.413.716A1.577 1.577 0 0 1 17.6 16c0 .9-.7 1.6-1.6 1.6h-3.2v-3.2h1.6v-.8c0-.443.357-.8.8-.8Zm-11.296.112a.797.797 0 0 1 .79.394l.32.556A.789.789 0 0 1 5.6 13.6c.443 0 .8.357.8.8H8v3.2H3.2c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h.278l-.17-.294a.795.795 0 0 1 .594-1.194h.002Z" fill="#fff"/>
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path fill="#fff" d="M0 0h24v24H0z"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Sushi
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Varefilters;
