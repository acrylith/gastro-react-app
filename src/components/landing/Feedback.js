import React from 'react'
import styled from 'styled-components'

const Say = styled.section`
    background-image: url('./img/feedback-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding-top: 7em;
    h2 {
        font-family: 'Great Vibes';
        color: ${props => props.theme.focus};
        margin: 0;
        line-height: 0.5;
        font-size: 50px;
        text-align: center;
    }
    h1 {
        font-size: 40px;
        font-weight: bold;
        color: ${props => props.theme.text};
        line-height: 1;
        text-transform: uppercase;
        margin: 0;
        text-align: center;
    }
    .text {
        color: ${props => props.theme.text};
        font-size: 15px;
        line-height: 1.6;
        margin: 4em 0;
        text-align: center;
    }
    .feedback-wrapper {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
    }
    .feedback-item {
        width: 100%;
        padding: 2rem;
        color: ${props => props.theme.text};
        :nth-child(odd) {
            background-color: ${props => props.theme.focus};
        }
        :nth-child(even) {
            background-color: #A7804B;
        }
        p {
            font-size: 15px;
            ::before, ::after {
                content: '"';
            }
        }
        @media (min-width: 992px) {
            width: 20%;
        }
    }
    .customer {
        strong {
            display: block;
        }
        span {
            font-size: 14px;
            opacity: 0.8;
        }
    }
`

export default function Feedback() {
    return (
        <Say>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <h2>Testimony</h2>
                        <h1>CUSTOMERS SAYS</h1>
                        <p className='text'>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            At euismod sociosqu urna parturient venenatis.
                        </p>
                    </div>
                </div>
            </div>
            <div className='feedback-wrapper'>
                <div className='feedback-item'>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Hac condimentum quam mi neque maximus. 
                        Sed praesent suspendisse turpis dis massa lectus auctor malesuada. 
                    </p>
                    <div className='customer'>
                        <strong>John Doe</strong>
                        <span>Illustrator Designer</span>
                    </div>
                </div>
                <div className='feedback-item'>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Hac condimentum quam mi neque maximus. 
                        Sed praesent suspendisse turpis dis massa lectus auctor malesuada. 
                        Luctus justo condimentum auctor ad taciti mi litora magnis.
                    </p>
                    <div className='customer'>
                        <strong>John Doe</strong>
                        <span>Illustrator Designer</span>
                    </div>
                </div>
                <div className='feedback-item'>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Purus donec nunc purus dictum erat magna. 
                        Habitant metus at penatibus iaculis nunc suspendisse metus enim. 
                        Luctus justo condimentum auctor ad taciti mi litora magnis. 
                        Sed praesent suspendisse turpis dis massa lectus auctor malesuada.
                    </p>
                    <div className='customer'>
                        <strong>John Doe</strong>
                        <span>Illustrator Designer</span>
                    </div>
                </div>
                <div className='feedback-item'>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. 
                         Natoque amet imperdiet neque diam egestas eu.
                         Sed praesent suspendisse turpis dis massa lectus auctor malesuada. 
                    </p>
                    <div className='customer'>
                        <strong>John Doe</strong>
                        <span>Illustrator Designer</span>
                    </div>
                </div>
                <div className='feedback-item'>
                    <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Hac condimentum quam mi neque maximus. 
                        Natoque amet imperdiet neque diam egestas eu. Sed praesent suspendisse turpis dis massa lectus auctor malesuada.
                        Ullamcorper fames dictum sem hendrerit ultricies parturient. 
                    </p>
                    <div className='customer'>
                        <strong>John Doe</strong>
                        <span>Illustrator Designer</span>
                    </div>
                </div>
            </div>
        </Say>
    )
}