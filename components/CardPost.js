import InfoPost from "./InfoPost";
import Link from "next/link";
import Image from "next/image";

function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <Image
          src={thumbnail}
          alt="img-thumbnail"
          className="w-full rounded mb-4"
        />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

export default CardPost;
