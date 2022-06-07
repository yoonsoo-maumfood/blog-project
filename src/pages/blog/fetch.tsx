import { useState, useEffect } from "react";

import { Post, DataStatus } from '../../modules/Post'
import { getPosts } from '../../modules/Post/fetch';
import PostElement from '../../components/Post';


const Fetch = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<DataStatus>(DataStatus.Processing);


  useEffect(() => {
    getPosts(
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/comments",
      setPosts,
      setStatus,
    );
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
      {status === DataStatus.Done ? ( //Done 일때,,
        posts.map((post) => (
          <PostElement post={post} key={post.id}/>
        ))
      ) : status === DataStatus.Processing ? ( //Processing일때,
        <h2>로딩중</h2>
      ) : ( //Failed일때,
        <h2>실패</h2>
      )}
    </div>
  );
};

export default Fetch;
