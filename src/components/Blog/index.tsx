import Link from "next/link";
import { Post, DataStatus } from "../../modules/Post";
import { Post as PostComponent } from "./Post";

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
  let otherTwo = ["Axios", "Server", "Fetch"];
  otherTwo.splice( otherTwo.indexOf(header), 1);
  
  return (
    <BlogContainer>
      <HeaderContainer>
        <Title>{header}</Title>
        <LinkContainer>
          <LinkStyled>
            <Link href={`/blog/${otherTwo[0].toLowerCase()}`}>
              {otherTwo[0]}
            </Link>
          </LinkStyled>
          <LinkStyled>
            <Link href={`/blog/${otherTwo[1].toLowerCase()}`}>
              {otherTwo[1]}
            </Link>
          </LinkStyled>
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
