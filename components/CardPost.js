import InfoPost from "./InfoPost";
import Link from "next/link";
import Image from "next/image";

function CardPost(props) {
  const { thumbnail } = props.attributes;
  return (
    <article>
      <Link href={`/post/${props.attributes.slug}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnail.data.attributes.formats.thumbnail.url}`}
          alt="img-thumbnail"
          width={thumbnail.data.attributes.formats.thumbnail.height}
          height={thumbnail.data.attributes.formats.thumbnail.width}
          className="w-full rounded mb-4"
        />
      </Link>
      <InfoPost {...props.attributes} />
    </article>
  );
}

export default CardPost;
