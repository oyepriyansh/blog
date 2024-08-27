import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
        <div>
            <Link href={`./${props.slug}`}>
                <h2>
                    {props.title}
                </h2>
                <p>{props.date}</p>
                <p>{props.subtitle}</p>
            </Link>
        </div>
    );
};

export default PostPreview;