import { useState, useEffect } from "react";

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
  setPosts: Function
) => {
  const newPosts = Array<Post>();

  const fetchPosts = await fetch(postsUrl);
  for (const post of await fetchPosts.json()) {
    post.comments = []; //post.comment는 json에서 초기화되지 않으므로
    newPosts.push(post);
  }

  const fetchComments = await fetch(commentsUrl);
  for (const comment of await fetchComments.json()) {
    newPosts[comment.postId - 1].comments.push(comment);
  }
  setPosts(newPosts);
};

const Fetch = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts(
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/comments",
      setPosts
    );
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
      {posts.length ? (
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
      ) : (
        <h2>로딩중</h2>
      )}
    </div>
  );
};

export default Fetch;
