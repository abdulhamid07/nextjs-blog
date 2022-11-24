import CardPost from "../components/CardPost";

function Posts({ posts, keyword }) {
  return (
    <>
      {!posts.length ? (
        <div className="text-center py-20">
          <h2 className="text-6xl">No result 😥</h2>
          <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">
            We couldn’t find any posts with keyword {keyword}. Please try
            another keyword.
          </p>
        </div>
      ) : (
        <div className="flex -mx-4 mt-6 flex-wrap">
          {posts.map((post) => (
            <div className="md:w-4/12 px-4 py-6" key={post.id}>
              <CardPost {...post} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Posts;
