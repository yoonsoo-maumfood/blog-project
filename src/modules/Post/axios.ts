import axios from 'axios';
import { Post, DataStatus } from './index';

const getPosts = async (
  postsUrl: string,
  commentsUrl: string,
  setPosts: Function,
  setStatus: Function,
) => {
  try {
    setStatus(DataStatus.Processing);
    const newPosts: Post[] = [];
    for ( const post of (await axios.get(postsUrl)).data ) {
      newPosts.push(new Post(post));
    }
    for ( const comment of (await axios.get(commentsUrl)).data ) {
      newPosts[comment.postId - 1].comments.push(comment);
    }

    setPosts(newPosts);
    setStatus(DataStatus.Done);
  } catch(e) {
    console.log(e)
    setStatus(DataStatus.Failed);
  }
}

export { getPosts };