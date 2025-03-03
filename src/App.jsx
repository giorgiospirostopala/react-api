import React, { useState } from "react";
import posts from "./data/posts";

function App() {
  const [listaPost, setListaPost] = useState(posts);

  return (
    <div>
      <h1>Post</h1>
      <ul>
        {listaPost.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;