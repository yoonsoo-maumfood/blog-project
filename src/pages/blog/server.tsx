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
  //static page에서 processing이 rendering되는 경우는 없으므로 신경쓸 필요가 없음.
  const { posts, status } = await getPosts(
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
  );
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      status: status,
    }
  }
}

export default Server;