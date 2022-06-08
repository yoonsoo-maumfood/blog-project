import { useState, useEffect } from "react";

import { Post, DataStatus } from "../../modules/Post";
import { getPosts } from "../../modules/Post/axios";
import Blog from '../../components/Blog';

const Axios = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<DataStatus>(DataStatus.Processing);

  useEffect(() => {
    setStatus(DataStatus.Processing);
    getPosts(
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/comments",
    ).then( ({ posts, status}) => {
      setPosts(posts);
      setStatus(status);
    });
  }, []);

  return (
    <div>
      <Blog header="Axios" posts={posts} status={status} />
    </div>
  );
};

export default Axios;
