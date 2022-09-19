import React from 'react'
import styled from 'styled-components'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import { MdDateRange } from 'react-icons/md'

const MapSection = styled.section`
    padding: 4em 0;
    background-color: black;
    h2 {
        color: ${props => props.theme.text};
        margin: 0;
    }
    iframe {
        width: 100%;
    }
    .book {
        height: 100%;
        padding: 3em;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        border-bottom: 2px solid ${props => props.theme.text};
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

const BookIcon = styled(Ic)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 20px;
    color: ${props => props.theme.text};
`

export default function Map() {
    const submitHandler = (e) => {
        e.preventDefault()
        alert("Booked!")
    }

    return (
        <MapSection>
            <div className='row g-0'>
                <div className='col-lg-6'>
                    <iframe
                        title='locationMap'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155455.90503649262!2d-2.003713977344127!3d52.497266443403745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2z0JHRltGA0LzRltC90pHQtdC8!5e0!3m2!1suk!2suk!4v1662059252973!5m2!1suk!2suk"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className='col-lg-5'>
                    <div className='book'>
                        <Form onSubmit={(e) => submitHandler(e)}>
                            <h2>Book a Table</h2>
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
                    </div>
                </div>
            </div>
        </MapSection>
    )
}