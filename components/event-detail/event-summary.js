import styles from './event-summary.module.css';

const EventSummary = (props) => {
    return (
        <section className={styles.summary}>
            <h1>
                {props.title}
            </h1>
        </section>
    );
};

export default EventSummary;