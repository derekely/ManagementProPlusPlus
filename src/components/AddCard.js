import React, { useState } from "react";
import "./AddCard.css";
// Makes a window -- or adds JSX -- after button press to create new project
export default function AddCard(props){
 
    
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <label>
                    Project Title <input name="cardTitle" />
                </label>
                <hr />
                <label>
                    Project Description <input name="cardDescription" />
                </label>
                <hr />
                <label>
                    Project Start Date <input name="cardDate" />
                </label>
                <hr />
                <button className="close-btn" onClick={()=> props.setTrigger(false)}>x</button>
                <button className="add-to-task-btn">Add Project to tasks!</button>
                { props.children }
            </div>
        </div>
    ) : ""
}