import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Contacts = () => {
    const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.6146264138083!2d24.70820231559441!3d48.92273410412823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c1134ecde1fd%3A0xc4573d3ae24e5d27!2z0KDQsNGC0YPRiNCw!5e0!3m2!1suk!2sua!4v1638898817912!5m2!1suk!2sua";
    const mapStyle = {
        width: "100%",
        height: 450,
        border: 0
    }

    return (
        <div>
            <Container>
                <Row>
                    <h1 className="contacts__title">Контакти</h1>
                </Row>
                <Row>
                    <div className="contacts__map">
                        <iframe src={mapURL} style={mapStyle} title="map" loading="lazy"></iframe>
                    </div>
                </Row>
                <Row>
                    <div className="contacts__info info">
                        <h3>Адреса</h3>
                        <p>м.Івано-Франківськ, вул.Пушкіна, буд. Кукушкіна</p>
                        <h3>Час роботи</h3>
                        <p>10:00 - 22:00</p>
                        <h3>Наші соцмережі</h3>
                        <p><a className="fblink" href="facebook.com" target="_blank">Facebook</a></p>
                        <p><a className="instalink" href="instagram.com" target="_blank">Instagram</a></p>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Contacts;
