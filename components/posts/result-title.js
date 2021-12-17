import styles from './result-title.module.css';
import Button from "../ui/button";

const ResultTitle = (props) => {

    const {date} = props;
    const humanReadableDate = new Date(date).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
    });

    return (
        <section className={styles.title}>
            <h1>
                Posts in {humanReadableDate}
            </h1>
            <Button link="/posts">
                Show All Posts
            </Button>
        </section>
    );
};

export default ResultTitle;