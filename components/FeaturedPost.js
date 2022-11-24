import InfoPost from "./InfoPost";
import Link from "next/link";
import Image from "next/image";

function FeaturedPost(props) {
  const { thumbnail} = props.attributes;

  return (
    <article>
      <div className="flex -mx-4 items-center flex-wrap">
        <div className="lg:w-8/12 md:w-7/12 px-4">
          <Link href={`/post/${props.attributes.slug}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnail.data.attributes.formats.large.url}`}
              alt="feature-image"
              width={thumbnail.data.attributes.formats.large.width}
              height={thumbnail.data.attributes.formats.large.height}
              className="rounded-xl w-full md:mb-0 mb-4"
            />
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost {...props.attributes} />
        </div>
      </div>
      <hr className="md:hidden border-white/10 md:mt-0 mt-10 " />
    </article>
  );
}

export default FeaturedPost;
