import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "@/components/getPostMetaData";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div className="text-gray-100">
            <h1 className="text-3xl font-bold text-slate-300 mt-6">
            • {post.data.title}
            </h1>
            <article className="prose prose-invert lg:prose-lg max-w-none">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;