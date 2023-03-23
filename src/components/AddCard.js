import React, { useState } from "react";
import Card from "./Card";
import "./AddCard.css";
// Makes a window -- or adds JSX -- after button press to create new project
export default function AddCard(props){
    
    function handleAddTaskClick() {
        let card = <Card {...props} />;
        console.log(props);
        props.setTrigger = false;
        // Do something with the card variable, such as adding it to the DOM
      }
      
    
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>x</button>
                    <h1>CREATE YOUR OWN PROJECT!</h1>
                    <div id="top-row">
                        <label className="project-Title">
                            Project Title <input placeholder="Project Title" name="cardTitle" />
                        </label>
                        
                        <label className="project-Date">
                            Project Due Date <input placeholder="Due Date" name="cardDate" />
                        </label>
                    </div>
                    <div id="middle-row">
                        <label htmlFor="project-description">
                            Project Description
                        </label>
                        <textarea id="project-description" placeholder="What are the details of your project...?"></textarea>
                    </div>
                <div id="bottom-row">
                    <button className="add-to-task-btn" onClick={handleAddTaskClick}>Add Project to tasks!</button>
                    { props.children }
                </div>
                
            </div>
        </div>
    ) : ""






}