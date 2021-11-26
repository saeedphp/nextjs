import Link from 'next/link';
import styles from './event-item.module.css';
import Button from "../UI/button";

const EventItem = (props) => {

    const {id, title, location, image, date} = props;

    const humanReadableDate = new Date(date).toLocaleString('en-US',{
        day: "numeric",
        month: 'long',
        year: "numeric",
    });

    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li className={styles.item}>

            <img src={'/' + image} alt={title}/>

            <div className={styles.content}>

                <div>
                    <h2>
                        {title}
                    </h2>
                </div>

                <div className={styles.date}>
                    <i className="fa fa-clock"></i>
                    <time>
                        {humanReadableDate};
                    </time>
                </div>

                <div className={styles.address}>
                    <i className="fa fa-address-card"></i>
                    <address>
                        {formattedAddress}
                    </address>
                </div>

                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        Explore Event
                        <i className="fa fa-arrow-alt-circle-right"></i>
                    </Button>
                </div>

            </div>

        </li>
    );
};

export default EventItem;