import styles from './post-summary.module.css';

const PostSummary = (props) => {

    const {title}=props;

    return (
        <section className={styles.summary}>
            <h1>
                {title}
            </h1>
        </section>
    )
};

export default PostSummary;