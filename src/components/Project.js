import React from 'react';

const Project = props => {
  const { title, type, description, url, img } = props.projectData;
  return (
    <a href={url}>
      <img src={img.src} alt={`${title} Screenshot`} />
      <h3>{`${title} | ${type}`}</h3>
      <h4>{`${description}`}</h4>
    </a>
  );
};

export default Project;
