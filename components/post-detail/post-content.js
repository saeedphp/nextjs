import styles from './post-content.module.css';

const PostContent = (props) => {
    return (
        <section className={styles.content}>
            {props.children}
        </section>
    )
};

export default PostContent;