import { Post, DataStatus } from './index';

const getPosts = async (
  postsUrl: string,
  commentsUrl: string,
): Promise<{posts: Post[], status: DataStatus}> => {
  try {
    const newPosts: Post[] = [];
    const responsePosts = await fetch(postsUrl);
    if (!responsePosts.ok) {
      throw new Error("fetchPosts Failed");
    }
    const rawPosts = await responsePosts.json();

    for (const post of rawPosts) {
      newPosts.push(new Post(post)); //comment[]가 자동으로 생성되도록
    }

    const responseComments = await fetch(commentsUrl);
    if (!responseComments.ok) {
      throw new Error("fetchComments Failed");
    }
    const comments = await responseComments.json();
    for (const comment of comments) {
      newPosts[comment.postId - 1].comments.push(comment);
    }

    return { posts: newPosts, status: DataStatus.Done };

  } catch(e) {
    console.log(e);
    return { posts: [], status: DataStatus.Failed };
  }
}

export { getPosts };