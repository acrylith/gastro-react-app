import React from 'react'
import styled from 'styled-components'
import { AiOutlineStar } from 'react-icons/ai'

const StarSection = styled.section`
    padding: 5rem 0;
    position: relative;
    .mask {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
        z-index: -2;
        background-image: url('./img/stars-bg.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .item {
        margin-bottom: 2rem;
        strong, span {
            display: block;
            text-align: center;
            cursor: default;
        }
        strong {
            color: ${props => props.theme.focus};
            font-size: 30px;
            margin: 1rem 0;
        }
        span {
            color: ${props => props.theme.text};
            font-size: 16px;
        }
        :hover {
            i {
                color: ${props => props.theme.text};
                ::before {
                    transform: rotate(-45deg);
                    background-color: ${props => props.theme.focus};
                }
            }
        }
        @media (min-width: 992px) {
            margin: 0;
        }
    }
`
const Ic = ({className, ic}) => (
    <div className={className}>
        <i>{ic}</i>
    </div>
)

const Icon = styled(Ic)`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    i {
        position: relative;
        height: 80px;
        width: 80px;
        font-size: 56px;
        text-align: center;
        line-height: 1.3;
        color: ${props => props.theme.focus};
        transition: all .5s;
        ::before {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border: 1px solid ${props => props.theme.focus};
            transition: all .5s;
        }
    }
    
`

export default function Stars() {
    return (
        <StarSection>
            <div className='container'>
                <div className='mask'></div>
                <div className='row'>
                    <div className='col-md-6 col-lg-3'>
                        <div className='item'>
                            <Icon ic={<AiOutlineStar />} />
                            <strong>12</strong>
                            <span>Years of experience</span>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='item'>
                            <Icon ic={<AiOutlineStar />} />
                            <strong>42</strong>
                            <span>Number of Awards</span>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='item'>
                            <Icon ic={<AiOutlineStar />} />
                            <strong>10 576</strong>
                            <span>Happy Customers</span>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='item'>
                            <Icon ic={<AiOutlineStar />} />
                            <strong>21</strong>
                            <span>Staff</span>
                        </div>
                    </div>
                </div>
            </div>
        </StarSection>
    )
}