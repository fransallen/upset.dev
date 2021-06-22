import React from 'react';

const ProjectListItem = ({ project }) => {
  const startYear = new Date(project.startDate).getFullYear();
  const icon = project.icon
    ? `<img src=${project.icon} alt=${project.name} />`
    : `<span class="project-icon">${project.name.charAt(0)}</span>`;

  return (
    <a href={project.url} className="project">
      <div className="header">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
        <h3>{project.name}</h3>
      </div>
      <p>{project.description}</p>
      <small>Released in {startYear}</small>
    </a>
  );
};

const ProjectList = ({ projects }) => (
  <div className="projects">
    {projects.items.map((project, i) => (
      <ProjectListItem project={project} key={i} />
    ))}
  </div>
);

export default ProjectList;
