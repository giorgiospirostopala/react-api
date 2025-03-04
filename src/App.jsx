// import React, { useState, useEffect } from "react";

// function App() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:3000/api/posts")
//             .then((res) => res.json())
//             .then((data) => {
//                 setPosts(data);
//             })
//             .catch((err) => console.error(err));
//     }, []);

//     return (
//         <div>
//             <h1>Post</h1>
//             <ul>
//                 {posts.map((post) => (
//                     <li key={post.id}>
//                         <strong>{post.title}</strong>: {post.content}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;