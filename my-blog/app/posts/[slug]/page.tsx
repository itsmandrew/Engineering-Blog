const PostPage = (props: any) => {
    const slug = props.params.slug;
    return (
        <p>
            <h1>This a post: {slug} </h1>
        </p>
    )
}

export default PostPage;