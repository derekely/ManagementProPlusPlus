import React, { useState } from 'react'; 
import projectsData from '../data.json';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, deleteDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";



function ProjectCard(props) {
  const { name, id, description } = props.project;
  const navigate = useNavigate();

  const handleDelete = () => {
    props.onDelete(props.project);
  };

  const handleProjectClick = () => {
    navigate('/Tasks');
    localStorage.setItem('project', props.project.name);
  }

  return (
    <div className="project-card relative flex justify-between items-end">
      <button className="hover:text-blue-700 font-bold py-2 px-4 rounded" onClick={handleProjectClick}>{name}</button>
      <p className="absolute bottom-0 right-5">ID: {id}</p>
      <p className="absolute bottom-0 left-20">{description}</p>
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
  const [newProject, setNewProject] = useState({ name: '', id: '', description:"", tasks: [] });

  const query = collection(db, localStorage.getItem('email'));
  const [docs,loading,error] = useCollectionData(query);


  const handleInputChange = (event) => {
    setNewProject({
      ...newProject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
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
      description: "",
      tasks: [],
    });
    await setDoc(doc(db,localStorage.getItem('email'),newProject.name), {
      name: newProject.name,
      id: newProject.id,
      description: newProject.description,
      tasks: newProject.tasks,
    })
  };

  const handleDelete = async (projectToDelete) => {
    const updatedProjects = projects.filter((project) => project !== projectToDelete);
    setProjects(updatedProjects);
    await deleteDoc(doc(db,localStorage.getItem('email'),projectToDelete.name));
  };

  return (
    <div className="projects-list">
      <form className="mt-5 mb-5 mx-auto max-w-xs" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Project Name:
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
            Project ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="number"
            name="id"
            value={newProject.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
            Project Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Add Project
        </button>
      {loading && "Loading..."}  
      </form>
      {docs?.map((project) => (
        <ProjectCard key={project.id} project={project} description={project.description} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ProjectsList;
