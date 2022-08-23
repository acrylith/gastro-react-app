import React from 'react'
import styled from 'styled-components'

const StorySection = styled.section`
    /* height: 800px; */
    background-image: url('./img/wood-bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .img-half {
        background-image: url('./img/story-photo.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        @media (min-width: 768px) {
            width: 50%;
            /* height: 100%; */
        }
        @media (max-width: 768px) {
            height: 300px;
        }
    }
    .text-half {
        /* padding: 8% 12% 10% 0;
        width: 50%; */
        .overlay {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 3rem 2rem;
            @media (min-width: 768px) {
                padding: 52px 26px;
                margin-left: -20%;
            }
        }
        h2 {
            font-family: 'Great Vibes';
            color: ${props => props.theme.focus};
            margin: 0;
            line-height: 0.5;
            font-size: 50px;
        }
        h1 {
            font-size: 40px;
            font-weight: bold;
            color: ${props => props.theme.text};
            line-height: 1;
            text-transform: uppercase;
            margin-bottom: 1.2rem;
        }
        p {
            color: ${props => props.theme.subtext};
            font-size: 15px;
            line-height: 1.6;
        }
        @media (min-width: 992px) {
            padding: 8% 12% 10% 0;
        }
        @media (min-width: 768px) {
            padding: 8% 8% 10% 0;
            width: 50%;
        }
    }
`

export default function Story() {
    return (
        <StorySection className='d-md-flex'>
            <div className='img-half' />
            <div className='text-half'>
                <div className='overlay'>
                    <h2>Discover</h2>
                    <h1>Our Story</h1>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Donec montes quam penatibus mus vestibulum. Tristique turpis urna diam pharetra scelerisque felis inceptos morbi. Iaculis condimentum praesent augue dui commodo. Vel tempor facilisis, nibh habitant nullam aliquet aptent ultrices. Est ultrices quis tellus id euismod. Magna orci rhoncus viverra nec lectus netus. Ac posuere ultricies cras natoque ipsum tincidunt dui. Egestas semper sodales nascetur eget nascetur orci.</p>
                </div>
            </div>
        </StorySection>
    )
}
