import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import PostSummary from "../../components/post-detail/post-summary";
import PostLogistics from "../../components/post-detail/post-logistics";
import PostContent from "../../components/post-detail/post-content";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const PostDetailPage = () => {

    const router = useRouter();
    const postId = router.query.postId;
    const post = getEventById(postId);

    if (!post) {
        return (
            <ErrorAlert>
                <p>No events found!</p>
                <div className="center">
                    <Button link="/posts">
                        Show All Posts
                    </Button>
                </div>
            </ErrorAlert>
        );
    }

    return (
        <div>
            <PostSummary title={post.title}/>
            <PostLogistics
                title={post.title}
                location={post.location}
                date={post.date}
                image={post.image}
            />
            <PostContent>
                <p>
                    {post.description}
                </p>
            </PostContent>
        </div>
    );
};

export default PostDetailPage;