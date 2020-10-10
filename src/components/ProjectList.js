import React from 'react';

const ProjectListItem = ({ project }) => {
  const startYear = new Date(project.startDate).getFullYear();
  const icon = project.icon
    ? project.icon
    : 'https://cdn.statically.io/avatar/shape=rounded/' +
      project.name.charAt(0);
  return (
    <a href={project.url} className="project">
      <div class="header">
        <img src={icon} alt={project.name} />
        <h3>{project.name}</h3>
      </div>
      <p>{project.description}</p>
      <small>Released in {startYear}</small>
    </a>
  );
};

const ProjectList = ({ projects }) => (
  <div class="projects">
    {projects.items.map((project, i) => (
      <ProjectListItem project={project} key={i} />
    ))}
  </div>
);

export default ProjectList;
