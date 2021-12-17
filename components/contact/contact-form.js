import React, {useState} from 'react';
import {Fragment} from "react";
import styles from './contact-form.module.css';

const ContactForm = () => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const sendMessageHandler = (event) => {
        event.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setEnteredEmail('');
        setEnteredName('');
        setEnteredMessage('');
    };

    return (
        <Fragment>
            <section className={styles.contact}>
                <h1>
                    How can I help you?
                </h1>
                <form className={styles.form} onSubmit={sendMessageHandler}>
                    <div className={styles.controls}>

                        <div className={styles.control}>
                            <label htmlFor="email">
                                Your email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={enteredEmail}
                                onChange={event => setEnteredEmail(event.target.value)}
                            />
                        </div>

                        <div className={styles.control}>
                            <label htmlFor="name">
                                Your name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={enteredName}
                                onChange={event => setEnteredName(event.target.value)}
                            />
                        </div>

                        <div className={styles.controls}>
                            <label>
                                Your message
                            </label>
                            <textarea rows="5" required value={enteredMessage} onChange={event => setEnteredMessage(event.target.value)}>

                            </textarea>
                        </div>

                        <div className={styles.actions}>
                            <button type="submit">
                                Send message
                            </button>
                        </div>

                    </div>
                </form>
            </section>
        </Fragment>
    )
};

export default ContactForm;