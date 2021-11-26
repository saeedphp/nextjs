import {useRouter} from "next/router";
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {Fragment} from "react";

const Events = () => {

    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => {

        const fulPath = `/events/${year}/${month}`;

        router.push(fulPath);

    };

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </Fragment>
    );
};

export default Events;