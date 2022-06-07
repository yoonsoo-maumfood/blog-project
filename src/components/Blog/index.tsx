import { Post as PostComponent } from "./Post";
import { Post, DataStatus } from "../../modules/Post";
import {
  BlogContainer,
  HeaderContainer,
  Title,
  LinkContainer,
  LinkStyled,
  Body,
  PostContainer,
  Processing,
  Failed,
} from "./styles";

export default function Blog({
  header,
  posts,
  status,
}: {
  header: string;
  posts: Post[];
  status: DataStatus;
}) {
  let otherTwo = Array<string>();
  switch (header) {
    case "Server":
      otherTwo = ["Axios", "Fetch"];
      break;
    case "Axios":
      otherTwo = ["Server", "Fetch"];
      break;
    case "Fetch":
      otherTwo = ["Server", "Axios"];
      break;
  }
  return (
    <BlogContainer>
      <HeaderContainer>
        <Title>{header}</Title>
        <LinkContainer>
          <LinkStyled href={`/blog/${otherTwo[0].toLowerCase()}`}>{otherTwo[0]}</LinkStyled>
          <LinkStyled href={`/blog/${otherTwo[1].toLowerCase()}`}>{otherTwo[1]}</LinkStyled>
        </LinkContainer>
      </HeaderContainer>
      <Body>
        {status === DataStatus.Done ? ( //Done 일때,,
          <PostContainer>
            {posts.map((post) => (
              <PostComponent post={post} key={post.id} />
            ))}
          </PostContainer>
        ) : status === DataStatus.Processing ? ( //Processing일때,
          <Processing>로딩중</Processing>
        ) : (
          //Failed일때,
          <Failed>실패</Failed>
        )}
      </Body>
    </BlogContainer>
  );
}
