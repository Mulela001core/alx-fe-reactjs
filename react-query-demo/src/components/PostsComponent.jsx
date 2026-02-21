import { useQuery } from "@tanstack/react-query";

function PostsComponent() {

  const fetchPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    return response.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 2, // 2 minutes cache
  });

  if (isLoading) {
    return <h2>Loading posts...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h1>Posts</h1>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {isFetching && <p>Updating...</p>}

      {data.slice(0, 10).map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;
