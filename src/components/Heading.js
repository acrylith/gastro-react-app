import React from "react";
import styled from "styled-components";

const HeadingSection = styled.section`
    background-image: url('./img/pizza-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 80px);
    padding-top: 40px;
    @media (min-width: 992px) {
        padding-top: 100px;
        height: 100vh;
    }
`

const Splash = styled.div`
    h4 {
        color: ${props => props.theme.focus};
        text-align: center;
        font-family: 'Great Vibes';
        margin-bottom: 18px;
    }
    .wrapper {
        img {
            width: 100%;
        }
        margin-bottom: 18px;
    }
    p {
        color: ${props => props.theme.text};
        text-align: center;
        font-size: 18px;
    }
`

const Heading = () => {
    return(
        <HeadingSection>
            <div className="container">
                <Splash>
                    <div className="row justify-content-center">
                        <div className="col-6 col-lg-3"><h4>Welcome</h4></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-6 col-lg-3">
                            <div className="wrapper">
                                <img src="./img/gastro-logo.svg" alt="pizza-gastro"/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-8 col-xl-6">
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum nascetur malesuada cubilia maecenas aliquet donec tortor. Curabitur orci nam et sodales sagittis montes mus. Efficitur magna rhoncus non lobortis nulla ex faucibus.</p>
                        </div>
                    </div>
                </Splash>
            </div>
        </HeadingSection>
    )
}

export default Heading