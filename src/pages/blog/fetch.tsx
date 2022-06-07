import { useState, useEffect } from "react";

enum FetchStatus {
  Done,
  Processing,
  Failed,
}

interface FetchPosts {
  posts: Post[];
  status: FetchStatus;
}
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getPosts = async (
  postsUrl: string,
  commentsUrl: string,
  setFetchPosts: Function
) => {
  const newFetchPosts: FetchPosts = {
    posts: [],
    status: FetchStatus.Processing,
  };
  const newPosts = Array<Post>();
  try {
    const fetchPosts = await fetch(postsUrl);
    if (!fetchPosts.ok) {
      throw new Error("fetchPosts Failed");
    }
    for (const post of await fetchPosts.json()) {
      post.comments = []; //post.comment는 json에서 초기화되지 않으므로
      newPosts.push(post);
    }

    const fetchComments = await fetch(commentsUrl);
    if (!fetchComments.ok) {
      throw new Error("fetchComments Failed");
    }
    for (const comment of await fetchComments.json()) {
      newPosts[comment.postId - 1].comments.push(comment);
    }

    newFetchPosts.posts = newPosts;
    newFetchPosts.status = FetchStatus.Done;

    setFetchPosts(newFetchPosts);
  } catch (e) {
    newFetchPosts.status = FetchStatus.Failed;
    console.log(e);
    setFetchPosts(newFetchPosts);
  }
};

const Fetch = () => {
  const [fetchPosts, setFetchPosts] = useState<FetchPosts>({
    posts: [],
    status: FetchStatus.Processing,
  });
  const posts = fetchPosts.posts;

  useEffect(() => {
    getPosts(
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/comments",
      setFetchPosts
    );
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
      {fetchPosts.status === FetchStatus.Done ? ( //Done 일때,,
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
              <ul>
                {post.comments.map((comment) => (
                  <li key={comment.id}>{comment.body}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : fetchPosts.status === FetchStatus.Processing ? ( //Processing일때,
        <h2>로딩중</h2>
      ) : ( //Failed일때,
        <h2>실패</h2>
      )}
    </div>
  );
};

export default Fetch;
