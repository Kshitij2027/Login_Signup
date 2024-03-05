import React, { useState, useEffect } from 'react';
import axios from '../services/Api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">MelodyVerse Posts</h1>
      <div>
        {posts.map(post => (
          <div key={post._id} className="bg-gray-100 rounded p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
