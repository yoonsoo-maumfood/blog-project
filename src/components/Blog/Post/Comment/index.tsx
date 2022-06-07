import type { Comment } from '../../../../modules/Post';
import {
  CommentContainer,
  HeaderContainer,
  Title,
  Email,
  Body,
  Content,
} from './styles';

const CommentComponent = ( { comment }: { comment: Comment } ) => {
  return (
    <CommentContainer>
      <HeaderContainer>
        <Title>{comment.name}</Title>
        <Email>{comment.email}</Email>
      </HeaderContainer>
      <Body>
        <Content>{comment.body}</Content>
      </Body>
    </CommentContainer>
  )
}

export { CommentComponent as Comment };