import InfoPost from "./InfoPost";
import Link from "next/link";

function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center flex-wrap">
        <div className="lg:w-8/12 md:w-7/12 px-4">
          <Link href="/detail">
            <img
              src="/featured-thumbnail.png"
              alt="feature-image"
              className="rounded-xl w-full md:mb-0 mb-4"
            />
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category="UI Design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="I Designer"
          />
        </div>
      </div>
      <hr className="md:hidden border-white/10 md:mt-0 mt-10 " />
    </article>
  );
}

export default FeaturedPost;
