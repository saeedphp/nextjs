import styles from './event-logistics.module.css';
import LogisticsItem from "./logistics-item";

const EventLogistics = (props) => {

    const {date, address, image, imgAlt} = props;

    const humanReadableDAte = date.toLocaleString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <section className={styles.logistics}>

            <div className={styles.image}>
                <img src={`/${image}`} alt={imgAlt}/>
            </div>

            <ul className={styles.list}>
                <LogisticsItem>
                    <i className="fa fa-calendar"></i>
                    <time>
                        {humanReadableDAte}
                    </time>
                </LogisticsItem>
                <LogisticsItem>
                    <address>
                        {address}
                    </address>
                </LogisticsItem>
            </ul>

        </section>
    );
};

export default EventLogistics;