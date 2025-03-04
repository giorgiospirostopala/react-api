import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const endpoint = 'http://localhost:3000/api/posts';
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get(endpoint)
      .then((res) => setPosts(res.data))
      .catch(err => console.error(err));
  };

  useEffect(fetchPosts, []);


  return (
    <>
      

      <h1>Posts</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITOLO</th>
              <th>IMMAGINE</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => {
              return (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.image}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
