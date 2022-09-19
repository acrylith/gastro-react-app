import React from 'react'
import styled from 'styled-components'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { MdDateRange } from 'react-icons/md'

const ScheduleSection = styled.section`
    background: transparent;
    .wrapper-container {
        z-index: 2;
        position: relative;
    }
    .wrap {
        width: 100%;
    }
    @media (min-width: 992px) {
        margin-top: -80px;
    }  
`

const Info = styled.div`
    padding: 0 32px 24px 32px;
    background-color: ${props => props.theme.black};
    .card {
        h5 {
            color: ${props => props.theme.text};
            font-size: 16px;
        }
        p {
            color: gray;
            font-size: 14px;
            margin: 0;
        }
    }
    @media (min-width: 992px) {
        width: calc(100% - 35%);
        padding: 32px 80px 32px 180px;
        padding: 3% 5% 3% 5%;
    }
    @media (min-width: 1200px) {
        padding: 3% 5% 3% 12%;
    }
`
const Book = styled.div`
    padding: 22px;
    background-color: ${props => props.theme.focus};
    h5 {
        color: ${props => props.theme.text};
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
    @media (min-width: 992px) {
        width: 35%;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;
    .form-group {
        display: flex;
        gap: 32px;
    }
    .form-wrapper {
        position: relative;
        border-bottom: 2px solid #ddbe94;
        flex-grow: 1;
    }
    input {
        width: 100%;
        height: 38px;
        background-color: transparent;
        border: none;
        color: ${props => props.theme.text};
        ::placeholder {
            color: ${props => props.theme.text};
        }
        :focus {
            outline: none;
        }
    }
    input[type=submit] {
        border: none;
        background-color: white;
        color: black;
        text-transform: uppercase;
        transition: all .5s;
        @media (min-width: 992px) {
            :hover {
                background-color: ${props => props.theme.black};
                color: ${props => props.theme.focus};
            }
        }
    }
`
const Ic = ({className, ic}) => (
    <i className={className}>{ic}</i>
)

const InfoIcon = styled(Ic)`
    font-size: 22px;
    color: ${props => props.theme.focus};
    margin-right: 12px;
`

const BookIcon = styled(Ic)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 20px;
    color: ${props => props.theme.text};
`

export default function Schedule() {
    const submitHandler = (e) => {
        e.preventDefault()
        alert("Booked!")
    }

    return (
        <ScheduleSection>
            <div className='wrapper-container'>
                <div className='wrap d-lg-flex align-items-lg-end'>
                    <Info>
                        <div className='row no-gutters'>
                            <div className='col-md-4 gy-4 gy-lg-0'>
                                <div className='card'>
                                    <h5><InfoIcon ic={<AiFillPhone />} />000 (123) 456 7890</h5>
                                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Per proin arcu neque fringilla?</p>
                                </div>
                            </div>
                            <div className='col-md-4 gy-4 gy-lg-0'>
                                <div className='card'>
                                    <h5><InfoIcon ic={<HiLocationMarker />} />198 West 21th Street</h5>
                                    <p>203 Fake St. Mountain View, Birmingham, UK</p>
                                </div>
                            </div>
                            <div className='col-md-4 gy-4 gy-lg-0'>
                                <div className='card'>
                                    <h5><InfoIcon ic={<AiOutlineClockCircle />} />Open Monday-Friday</h5>
                                    <p>8:00am - 9:00pm</p>
                                </div>
                            </div>
                        </div>
                    </Info>
                    <Book>
                        <h5>book a table</h5>
                        <Form onSubmit={(e) => submitHandler(e)}>
                            <div className='form-group'>
                                <div className='form-wrapper'>
                                    <input type='text' placeholder='First Name*' />
                                </div>
                                <div className='form-wrapper'>
                                    <input type='text' placeholder='Last Name*' />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='form-wrapper'>
                                    <input type='text' placeholder='Date*' />
                                    <BookIcon ic={<MdDateRange />} />
                                </div>
                                <div className='form-wrapper'>
                                    <input type='text' placeholder='Time*' />
                                    <BookIcon ic={<AiOutlineClockCircle />} />
                                </div>
                                <div className='form-wrapper'>
                                    <input type='text' placeholder='Phone*' />
                                    <BookIcon ic={<AiFillPhone />} />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='form-wrapper'>
                                    <input type='text' placeholder='Message' />
                                </div>
                                <div className='form-wrapper'>
                                    <input type='submit' value='appointment' />
                                </div>
                            </div>
                        </Form>
                    </Book>
                </div>
            </div>
        </ScheduleSection>
    )
}