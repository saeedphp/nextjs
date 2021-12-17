import styles from './hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <img src="/images/site/max.jpg" alt="blog image" width={300} height={300}/>
            </div>
            <h1>
                Hi, I'm Saeed
            </h1>
            <p>
                 I blog about web development, especially frontend frameworks like React or Angular
            </p>
        </section>
    )
};

export default Hero;