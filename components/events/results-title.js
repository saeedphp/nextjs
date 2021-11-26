import styles from './results-title.module.css';
import Button from "../UI/button";

const ResultsTitle = (props) => {

    const humanReadableDate = props.date.toLocaleString('en-US',{
        month: 'long',
        year: 'numeric',
    });

    return (
        <section className={styles.title}>
            <h1>Events in {humanReadableDate}</h1>
            <Button link='/events'>Show all events</Button>
        </section>
    );
};

export default ResultsTitle;