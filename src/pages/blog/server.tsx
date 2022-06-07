import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PropsWPosts {
  posts: Post[];
}

const Server = ( { posts }: PropsWPosts  ) => {
  return (
    <div>
    <h1>Server</h1>
    {posts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}

    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: (await axios.get("https://jsonplaceholder.typicode.com/posts")).data,
    }
  }
}

export default Server;