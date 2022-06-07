import { Post as PostComponent } from "./Post";
import { Post, DataStatus } from "../../modules/Post";

export default function Blog({
  header,
  posts,
  status,
}: {
  header: string;
  posts: Post[];
  status: DataStatus;
}) {
  return (
    <div>
      <h1>{header}</h1>
      {status === DataStatus.Done ? ( //Done 일때,,
        posts.map((post) => <PostComponent post={post} key={post.id} />)
      ) : status === DataStatus.Processing ? ( //Processing일때,
        <h2>로딩중</h2>
      ) : (
        //Failed일때,
        <h2>실패</h2>
      )}
    </div>
  );
}
