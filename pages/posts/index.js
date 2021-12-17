import {getAllEvents} from "../../dummy-data";
import {useRouter} from "next/router";
import EventList from "../../components/home-page/events/event-list";
import PostSearch from "../../components/posts/post-search";

const AllPostsPage = () => {

    const posts = getAllEvents();
    const router = useRouter();

    const findPostsHandler = (year,month) => {
        const fullPath = `/posts/${year}/${month}`;
        router.push(fullPath);
    };

    return (
        <div>
            <PostSearch onSearch={findPostsHandler}/>
            <EventList posts={posts}/>
        </div>
    )
};

export default AllPostsPage;