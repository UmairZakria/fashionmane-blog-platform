'use client';
import { createContext, useContext, useState } from 'react';

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]); 

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogsContext.Provider>
  );
};

// Custom hook for easy access
export const useBlog = () => useContext(BlogsContext);
