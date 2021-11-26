import styles from './event-content.module.css';

const EventContent = (props) => {
    return (
        <section className={styles.content}>
            {props.children}
        </section>
    );
};

export default EventContent;