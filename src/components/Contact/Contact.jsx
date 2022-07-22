import React, { useRef, useState, useContext } from 'react';
import { themeContext } from '../../Context';
import { AwesomeContent, AwesomeText, Blur, Contac, ContactArea, ContactAwesome, ContactEmail, ContactForm, ContactSubmit, ContactText, Form, Thanks } from './StyledContact'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [done, setDone] = useState(false);
    const form = useRef();
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xqq26l8', 'template_2q9ewus', form.current, '6KXbMH5-idYmo-wVd')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Contac id='Contact'>
            <ContactAwesome>
                <AwesomeContent>
                    <AwesomeText
                        style={{ color: darkMode ? 'white' : '', }}
                    >Get in Touch</AwesomeText>
                    <AwesomeText>Contact me </AwesomeText>
                </AwesomeContent>
                <Blur />
            </ContactAwesome>
            <ContactForm>
                <Form ref={form} onSubmit={sendEmail} >
                    <ContactText
                        type="text"
                        name='user_name'
                        placeholder="Name"
                        className='input'
                        Required
                    />
                    <ContactEmail
                        type="email"
                        name='user_email'
                        placeholder="Email"
                        className='input'
                        Required
                    />
                    <ContactArea
                        name='message'
                        placeholder="Message"
                        className='input'
                        Required
                    />
                    <ContactSubmit
                        type="submit"
                        value='Send'
                    />
                    <Thanks>
                        {
                            done && "Thanks for Contact me !"
                        }
                    </Thanks>
                </Form>
                <Blur />
            </ContactForm>
        </Contac>
    )
}

export default Contact