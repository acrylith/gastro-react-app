import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import styled from 'styled-components'

const Foot = styled.footer`
    color: ${props => props.theme.text};
    padding: 2em 0;
    h4 {
        text-transform: uppercase;
        margin: 0;
    }
    p {
        font-size: 14px;
        color: ${props => props.theme.subtext};
    }
    a {
        width: 50px;
        height: 50px;
        background-color: rgba(255, 255, 255, 0.1);
        display: block;
        text-align: center;
        line-height: 1.2;
        border-radius: 50%;
    }
    .social {
        display: flex;
        gap: 12px;
        @media (max-width: 992px) {
            margin-bottom: 2em;
        }
    }
    .about {
        margin: 2em 0;
    }
    .contact {
        display: flex;
        gap: 18px;
        align-items: flex-start;
        align-content: flex-start;
        span {
            line-height: 1;
        }
    }
    .contacts {
        margin-top: 2em;
    }
`
const Ic = ({className, ic}) => (
    <span className={className}>{ic}</span>
)

const Soc = ({className, href, ic}) => (
    <a href={`https:\\${href}`} className={className} target='blank'>
        <span>{ic}</span>
    </a>
)

const SocialIcon = styled(Soc)`
    font-size: 36px;
    color: ${props => props.theme.text};
    transition: .5s all;
    :hover {
        color: ${props => props.theme.text};
        background-color: ${props => props.brandColor};
    }
`
const Con = styled(Ic)`

`

export default function Footer() {
    return (
        <Foot>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-lg-3'>
                        <h4>about us</h4>
                        <p className='about'>Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod morbi pretium pretium lacus fusce.</p>
                        <div className='social'>
                            <SocialIcon href='twitter.com' ic={<AiOutlineTwitter />} brandColor='#1da1f2' />
                            <SocialIcon href='facebook.com' ic={<AiOutlineFacebook />} brandColor='#1877f2' />
                            <SocialIcon href='instagram.com' ic={<AiOutlineInstagram />} brandColor='#c13584' />
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <h4>have a question?</h4>
                        <div className='contacts'>
                            <div className='contact'>
                                <Con ic={<HiLocationMarker />} />
                                <p>203 Fake St. Mountain View, Birmingham, UK</p>
                            </div>
                            <div className='contact'>
                                <Con ic={<AiFillPhone />} />
                                <p>000 (123) 456 7890</p>
                            </div>
                            <div className='contact'>
                                <Con ic={<AiOutlineMail />} />
                                <p>info@gastro.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Foot>
    )
}
