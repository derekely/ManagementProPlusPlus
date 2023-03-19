import React from "react";

// Makes a window -- or adds JSX -- after button press to create new project
export default function AddCard(){
    
    return(
        <>
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
            <button>Add Project to tasks!</button>
        </>
    )
}