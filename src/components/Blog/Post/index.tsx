//import styled from "styled-components";
import type { Post } from "../../../modules/Post";
import { Comment } from "./Comment";
import {
  PostContainer,
  Header,
  Title,
  UserID,
  Content,
  CommentBox,
} from "./styles";

const PostComponent = ({ post }: { post: Post }) => {
  return (
    <PostContainer>
      <Header>
        <Title>{post.title}</Title>
        <UserID>{post.userId}</UserID>
      </Header>
      <Content>{post.body}</Content>
      <CommentBox>
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </CommentBox>
    </PostContainer>
  );
};

export { PostComponent as Post }; //이름의 일관성을 위하여
