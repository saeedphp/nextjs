import React, {Fragment} from 'react';
import styles from './error-modal.module.css';
import Card from "./card";
import Button from "./button";

const ErrorModal = (props) => {

    const {title, message} = props;

    return (
        <Fragment>
            <div className={styles.backdrop} onClick={props.onConfirm}>

            </div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>
                        {title}
                    </h2>
                </header>
                <div className={styles.content}>
                    <p>
                        {message}
                    </p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>
                        OK
                    </Button>
                </footer>
            </Card>
        </Fragment>
    )
};

export default ErrorModal;