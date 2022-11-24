import PostAuthor from "@components/PostAuthor";
import PostMetaTitle from "@components/PostMetaTitle";
import { formatDate } from "utils/utils";

function InfoPost(props) {
  const {author,category} = props;
  return (
    <div>
      <PostMetaTitle
        category={category?.data?.attributes.name}
        date={formatDate(props.publishedAt)}
        title={props.title}
        slug={props.slug}
      />
      <p className="text-white/60 mt-5 text-justify">
        {props.headline}
      </p>
      <PostAuthor
        authorAvatar={`${process.env.NEXT_PUBLIC_API_URL}${author.data.attributes.avatar.data.attributes.url}`}
        authorName={author?.data.attributes.name}
        authorJob={author?.data.attributes.job}
      />
    </div>
  );
}
export default InfoPost;
