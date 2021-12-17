import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/home-page/events/event-list";
import ResultTitle from "../../components/posts/result-title";
import {Fragment} from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredPage = () => {

    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return (
            <ErrorAlert>
                <p>Loading...</p>
                <div className="center">
                    <Button link="/posts">
                        Show All Posts
                    </Button>
                </div>
            </ErrorAlert>
        );
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
        return (
            <ErrorAlert>
                <p>Invalid filter.Please adjust your values!</p>;
                <div className="center">
                    <Button link="/posts">
                        Show All Posts
                    </Button>
                </div>
            </ErrorAlert>
        );

    }

    const filteredPosts = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredPosts || filteredPosts.length === 0) {
        return (
            <ErrorAlert>
                <p>No posts found for the chosen filter!</p>
                <div className="center">
                    <Button link="/posts">
                        Show All Posts
                    </Button>
                </div>
            </ErrorAlert>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            <ResultTitle date={date}/>
            <EventList posts={filteredPosts}/>
        </Fragment>
    )
};

export default FilteredPage;