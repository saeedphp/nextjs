import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/event-list";
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {

    const featureEvents = getFeaturedEvents();

    return (
        <div>
            <ul>
                <EventList items={featureEvents}/>
            </ul>
        </div>
    );
};

export default HomePage;