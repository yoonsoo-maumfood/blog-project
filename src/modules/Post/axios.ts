import axios from 'axios';
import { Post, DataStatus } from './index';

const getPosts = async (
  postsUrl: string,
  commentsUrl: string,
): Promise<{posts: Post[], status: DataStatus}> => {
  try {
    const newPosts: Post[] = [];
    const responsePosts = await axios.get(postsUrl)
    const rawPosts = responsePosts.data;
    for ( const post of rawPosts ) {
      newPosts.push(new Post(post));
    }

    const responseComments = await axios.get(commentsUrl);
    const comments = responseComments.data;

    for ( const comment of comments ) {
      newPosts[comment.postId - 1].comments.push(comment);
    }

    return Promise.resolve({ posts: newPosts, status: DataStatus.Done});
  } catch(e) {
    console.log(e);
    return Promise.reject({ posts: [], status: DataStatus.Failed});
  }
}

export { getPosts };