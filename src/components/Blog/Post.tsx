//import styled from "styled-components";
import type { Post } from "../../modules/Post";

const PostComponent = ({ post }: { post: Post }) => {
  return (
    <div>
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
  );
};

export { PostComponent as Post }; //이름의 일관성을 위하여
