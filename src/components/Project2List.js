import React from 'react';

const Project2ListItem = ({ project }) => {
  return (
    <div>
      <a href={project.url}>
        <h4>{project.name}</h4>
        {project.description}
      </a>
    </div>
  );
};

const Project2List = ({ projects2 }) => (
  <div className="projects2">
    {projects2.items.map((project, i) => (
      <Project2ListItem project={project} key={i} />
    ))}
  </div>
);

export default Project2List;
