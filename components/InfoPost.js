import PostAuthor from "@components/PostAuthor";
import PostMetaTitle from "@components/PostMetaTitle";

function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <div>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="text-white/60 mt-5 text-justify">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </div>
  );
}
export default InfoPost;
