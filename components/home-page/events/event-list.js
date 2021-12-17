import styles from './event-list.module.css';
import EventItem from "./event-item";

const EventList = (props) => {

    const {posts} = props;

    return (
        <ul className={styles.list}>
            {posts.map((post) => (
                <EventItem
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    location={post.location}
                    date={post.date}
                    image={post.image}
                />
            ))}
        </ul>
    )
};

export default EventList;