import React from 'react';
import NavBar from './NavBar';

class BlogLayout extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <section>{this.props.children}</section>
      </main>
    );
  }
}

export default BlogLayout;
