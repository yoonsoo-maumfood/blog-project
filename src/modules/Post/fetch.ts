import { Post, DataStatus } from './index';

const getPosts = async (
  postsUrl: string,
  commentsUrl: string,
  setPosts: Function,
  setStatus: Function,
) => {
  try {
    setStatus(DataStatus.Processing)
    const newPosts: Post[] = [];
    const fetchPosts = await fetch(postsUrl);
    if (!fetchPosts.ok) {
      throw new Error("fetchPosts Failed");
    }
    for (const post of await fetchPosts.json()) {
      newPosts.push(new Post(post)); //comment[]가 자동으로 생성되도록
    }

    const fetchComments = await fetch(commentsUrl);
    if (!fetchComments.ok) {
      throw new Error("fetchComments Failed");
    }
    for (const comment of await fetchComments.json()) {
      newPosts[comment.postId - 1].comments.push(comment);
    }

    setPosts(newPosts);
    setStatus(DataStatus.Done);
  } catch(e) {
    console.log(e);
    setStatus(DataStatus.Failed);
  }
}

export { getPosts };