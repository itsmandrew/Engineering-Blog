import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetaData";
import Link from "next/link";

const HomePage = () => {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div>{postPreviews}</div>;
};

export default HomePage;
