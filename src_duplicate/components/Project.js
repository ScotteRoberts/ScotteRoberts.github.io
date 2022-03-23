import React from "react";
import PropTypes from "prop-types";

const Project = ({ projectData }) => {
  const { title, type, description, action, url, img } = projectData;
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="img-link"
      >
        <img src={img.src} alt={`${title} Screenshot`} />
      </a>
      <h3>{`${title} | ${type}`}</h3>
      <h4>{`${description}`}</h4>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {`${action}`} <i className="fas fa-chevron-right" />
      </a>
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
