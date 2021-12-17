import Hero from "../components/home-page/hero";
import EventList from "../components/home-page/events/event-list";
import {getFeaturedEvents} from "../dummy-data";

const HomePage = () => {

    const featuredPosts = getFeaturedEvents();

    return (
        <div>
            <Hero/>
            <div>
                <h2 className="center">
                    Featured Posts
                </h2>
                <EventList posts={featuredPosts}/>
            </div>
        </div>
    )
};

export default HomePage;