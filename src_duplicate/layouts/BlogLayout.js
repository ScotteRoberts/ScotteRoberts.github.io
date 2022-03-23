import React from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const BlogLayout = ({ children }) => (
  <main>
    <NavBar />
    <article>{children}</article>
    <Footer />
  </main>
);

BlogLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default BlogLayout;
