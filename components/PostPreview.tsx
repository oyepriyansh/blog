import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
        <div className="post-preview p-4 rounded-md transition-colors duration-100 shadow-md shadow-black">
            <Link href={`./${props.slug}`}>
                <h2 className="font-bold text-blue-500 hover:text-blue-300">
                    {props.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2">{props.date}</p>
                <p className="text-gray-300 mt-2">{props.subtitle}</p>
            </Link>
        </div>
    );
};

export default PostPreview;