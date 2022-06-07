//import styled from "styled-components";
import type { Post } from "../modules/Post";

const PostElement = ({ post }: { post: Post }) => {
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

export default PostElement;
