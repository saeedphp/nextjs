import styles from './event-item.module.css';
import Link from "next/link";
import Button from "../../ui/button";
import AddressIcon from "../../icons/address-icon";
import DateIcon from "../../icons/date-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

const EventItem = (props) => {

    const {id, title, date, location, image} = props;
    const humanReadableDate=new Date(date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedLink=location.replace(', ', '\n');
    const exploreLink = `/posts/${id}`;
    const imgPath=`/${image}`;

    return (
        <li className={styles.item}>

            <img src={imgPath} alt={title} />

            <div className={styles.content}>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <div className={styles.date}>
                        <span>
                            <DateIcon/>
                        </span>
                        <time>
                            {humanReadableDate}
                        </time>
                    </div>
                    <div className={styles.address}>
                        <span>
                            <AddressIcon/>
                        </span>
                        <address>
                            {formattedLink}
                        </address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>
                            Explore Events
                        </span>
                        <span className={styles.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>
                </div>
            </div>

        </li>
    )
};

export default EventItem;