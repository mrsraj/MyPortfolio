// Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

import {
    Container,
    Wrapper,
    Title,
    Desc,
    ContactForm,
    ContactTitle,
    ContactInput,
    ContactInputMessage,
    ContactButton
} from './Contact.styles';

const Contact = () => {
    const [open, setOpen] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
            .then(() => {
                setOpen(true);
                form.current.reset();
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" required />
                    <ContactInput placeholder="Your Name" name="from_name" required />
                    <ContactInput placeholder="Subject" name="subject" required />
                    <ContactInputMessage placeholder="Message" rows="4" name="message" required />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                        Email sent successfully!
                    </Alert>
                </Snackbar>
            </Wrapper>
        </Container>
    );
};

export default Contact;
