import { useState, useEffect } from 'react';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const Fetch = () => {
  const [ posts, setPosts ] = useState<Post[]>([]);

  useEffect( () => {
    const fetchPromise = fetch('https://jsonplaceholder.typicode.com/posts');
    fetchPromise.then( response => {
      return response.json();
    }).then(
      json => {
        const newPosts = Array<Post>();
        for ( const post of json) {
          newPosts.push(post);
        }
        setPosts(newPosts);
      }
    )
  }, [])

  return (
    <div>
      <h1>Fetch</h1>
      { posts.length ? posts.map( (post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )) : <h2>로딩중</h2>}
    </div>
  );
};

export default Fetch;
