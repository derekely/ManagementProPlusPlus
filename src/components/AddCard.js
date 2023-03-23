import React, { useState } from "react";
import "./AddCard.css";
// Makes a window -- or adds JSX -- after button press to create new project
export default function AddCard(props){
 
    
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <label className="project-Title">
                    Project Title <input name="cardTitle" />
                </label>
        
                <label className="project-description">
                    Project Description <input name="cardDescription" />
                </label>
                
                <label className="project-Date">
                    Project Start Date <input name="cardDate" />
                </label>
                
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>x</button>
                <button className="add-to-task-btn">Add Project to tasks!</button>
                { props.children }
            </div>
        </div>
    ) : ""
}