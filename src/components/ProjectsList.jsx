import React, { useState } from 'react';
import projectsData from '../data.json';

function ProjectCard(props) {
  const { name, id } = props.project;

  const handleDelete = () => {
    props.onDelete(props.project);
  };

  return (
    <div className="project-card relative flex justify-between items-end">
      <h2>{name}</h2>
      <p className="absolute bottom-0 right-5">ID: {id}</p>
      <button className="self-start" onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
  
  

}

function ProjectsList() {
  const [projects, setProjects] = useState(projectsData.projects);
  const [newProject, setNewProject] = useState({ name: '', id: '', tasks: [] });

  const handleInputChange = (event) => {
    setNewProject({
      ...newProject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if ID is a valid number
    if (isNaN(newProject.id)) {
      alert("ID must be a number.");
      return;
    }
    
    // Check if name and ID are not empty
    if (newProject.name.trim() === "" || newProject.id.trim() === "") {
      alert("Name and ID are required.");
      return;
    }
  
    setProjects([...projects, newProject]);
    setNewProject({
      name: "",
      id: "",
      tasks: [],
    });
  };
  

  const handleDelete = (projectToDelete) => {
    const updatedProjects = projects.filter((project) => project !== projectToDelete);
    setProjects(updatedProjects);
  };

  return (
    <div className="projects-list">
      <form className="mt-5 mb-5 mx-auto max-w-xs" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={newProject.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
            ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            name="id"
            value={newProject.id}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Project
        </button>
      </form>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ProjectsList;
