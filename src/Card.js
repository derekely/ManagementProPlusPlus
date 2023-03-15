import React from "react";

// When calling this use the card function 
// pass through something like example
let projects = [];

export default function Card(){
    return (
        <Card style={{ width: '18rem' }}>
            <div className="card">
                <div className="cardBody">
                    <h2 className="cardTitle">Card</h2>
                    <p className="cardDescription">Card Description</p>
                    <p className="cardDate">Card Date</p>
                </div>
            </div>
        </Card>
    )
}



// An idea for this would make a popup asking for each of the card's details
// Makes a window -- or adds JSX -- after button press to create new project
export function AddCard(){
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