import { useEffect, useState } from 'react';
import type { Post } from "../../../modules/Post";
import { Comment } from "./Comment";
import {
  PostContainer,
  PostContentContainer,
  Header,
  Title,
  UserID,
  Content,
  CommentBox,
} from "./styles";

const INTERVAL = 300;

const PostComponent = ({ post, sequence }: { post: Post, sequence: number }) => {
  const [hidden, setHidden] = useState(true);

  useEffect( () => {
    setTimeout( () => {
      setHidden(false);
    }, INTERVAL * sequence)
  }, [sequence]);

  return (
    <PostContainer hidden={hidden}>
      <PostContentContainer>
        <Header>
          <Title>{post.title}</Title>
          <UserID>{post.userId}</UserID>
        </Header>
        <Content>{post.body}</Content>
      </PostContentContainer>
      <CommentBox>
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </CommentBox>
    </PostContainer>
  );
};

export { PostComponent as Post }; //이름의 일관성을 위하여
