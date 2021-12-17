import styles from './post-logistics.module.css';
import LogisticsItem from "./logistics-item";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

const PostLogistics = (props) => {

    const {title,image,date,location} = props;
    const humanReadableDate = new Date(date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedLocation = location.replace(', ', '\n');

    return (
        <section className={styles.logistics}>

            <div className={styles.image}>
                <img src={`/${image}`} alt={title} />
            </div>

            <ul className={styles.list}>
                <LogisticsItem icon={DateIcon}>
                    <time>
                        {humanReadableDate}
                    </time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address>
                        {formattedLocation}
                    </address>
                </LogisticsItem>
            </ul>

        </section>
    )
};

export default PostLogistics;