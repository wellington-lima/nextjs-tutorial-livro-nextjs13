export default function AnotherPostDetailPage({ params }) {

    const { slug } = params;

    const postDate = slug?.join("/");

    return <h1>Another Detail Page - Post { postDate} </h1>;
}