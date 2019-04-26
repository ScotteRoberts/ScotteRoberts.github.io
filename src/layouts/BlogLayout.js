import React from 'react';
import NavBar from '../components/NavBar';

const BlogLayout = ({ children }) => (
  <main>
    <NavBar />
    <section>{children}</section>
  </main>
);

export default BlogLayout;
