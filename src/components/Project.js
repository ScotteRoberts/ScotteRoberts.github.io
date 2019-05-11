import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ projectData }) => {
  const { title, type, description, url, img } = projectData;
  return (
    <a href={url}>
      <img src={img.src} alt={`${title} Screenshot`} />
      <h3>{`${title} | ${type}`}</h3>
      <h4>{`${description}`}</h4>
    </a>
  );
};

Project.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
    }),
  }),
};

export default Project;
