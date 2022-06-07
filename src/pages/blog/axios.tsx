import { useState, useEffect } from "react";

import { Post, DataStatus } from "../../modules/Post";
import { getPosts } from "../../modules/Post/axios";
import Blog from '../../components/Blog';

const Axios = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<DataStatus>(DataStatus.Processing);

  useEffect(() => {
    getPosts(
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/comments",
      setPosts,
      setStatus
    );
  }, []);

  return (
    <div>
      <Blog header="Axios" posts={posts} status={status} />
    </div>
  );
};

export default Axios;
