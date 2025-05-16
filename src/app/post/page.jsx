
'use client';

import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error al obtener las publicaciones', error);
        setLoading(false);
      }
    };

    fetchPosts(); 
  }, []); 

  
  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Lista de Publicaciones</h1>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}