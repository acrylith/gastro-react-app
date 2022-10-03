import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import { RiFileList3Line } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineFoodBank } from 'react-icons/md'
import useOnScreen from '../../hooks/useOnScreen'
import { fadeIn } from 'react-animations'

const AdvSection = styled.section`
    padding: 5rem 0;
    background-color: ${props => props.theme.focus};
`
const Ic = ({className, ic}) => (
    <i className={className}>{ic}</i>
)
const Icon = styled(Ic)`
    font-size: 72px;
    line-height: 1;
`
const Advantage = styled.div`
    color: ${props => props.theme.black};
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity .8s ease-in-out;
    .icon {
        display: flex;
        justify-content: center;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border: 3px solid ${props => props.theme.black};
        margin-bottom: 2rem;
        @media (min-width: 768px) {
            margin-bottom: 3rem;
        }
    }
    h5 {
        font-size: 18px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    p {
        font-size: 16px;
        text-align: center;
    }
`

export default function Advantages() {
    const advantageRef = useRef()
    const isVisible = useOnScreen(advantageRef, "-60px")
    return (
        <AdvSection>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                    <Advantage visible={isVisible} ref={advantageRef}>
                        <div className='icon'><Icon ic={<RiFileList3Line />} /></div>
                        <h5>easy to order</h5>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Dis metus massa quis libero condimentum euismod neque ad</p>
                    </Advantage>
                    </div>
                    <div className='col-md-4'>
                    <Advantage visible={isVisible} ref={advantageRef}>
                        <div className='icon'><Icon ic={<TbTruckDelivery />} /></div>
                        <h5>fast delivery</h5>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Dis metus massa quis libero condimentum euismod neque ad</p>
                    </Advantage >
                    </div>
                    <div className='col-md-4'>
                    <Advantage visible={isVisible} ref={advantageRef}>
                        <div className='icon'><Icon ic={<MdOutlineFoodBank />} /></div>
                        <h5>quality food</h5>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Dis metus massa quis libero condimentum euismod neque ad</p>
                    </Advantage>
                    </div>
                </div>
            </div>
        </AdvSection>
    )
}
