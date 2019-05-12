import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ projectData }) => {
  const { title, type, description, action, url, img } = projectData;
  return (
    <div>
      <a href={url}>
        <img src={img.src} alt={`${title} Screenshot`} />
      </a>
      <h3>{`${title} | ${type}`}</h3>
      <h4>{`${description}`}</h4>
      <a href={url}>{`${action}`} &#8811;</a>
    </div>
  );
};

Project.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
    }),
  }),
};

export default Project;
