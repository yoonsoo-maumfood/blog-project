import { Post, DataStatus } from '../../modules/Post';
import { getPosts } from "../../modules/Post/axios";
import Blog from '../../components/Blog';

const Server = ( { posts, status }: { posts: Post[], status: DataStatus}  ) => {
  return (
    <div>
      <Blog header="Server" posts={posts} status={status} />
    </div>
  )
}

export async function getStaticProps() {
  let posts;
  let status: DataStatus = DataStatus.Processing;

  await getPosts(
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    ( value: Post[] ) => ( posts = value ),
    ( value: DataStatus ) => ( status = value ),
  );
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      status: status,
    }
  }
}

export default Server;