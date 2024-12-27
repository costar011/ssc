import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
}

const BoardList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <div>
      <h1>Board</h1>
      <Link to="/board/write">Write</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/board/${post.id}`}>{post.title}</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;