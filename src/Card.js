import React from "react";

// When calling this use the card function 
// pass through something like example
// <Card
//    title="Title"
//    cardDescription="short description of project"
//    cardReference="the referenced page for the card">
export default function Card(){
    return (
        <div className="card">
            <div className="cardBody">
                <h2 className="cardTitle">Card</h2>
                <p className="cardDescription">Card Description</p>
                <p className="cardDate">Card Date</p>
            </div>
        </div>
    )
    // <div className="card">
    //     <div className="cardBody">
    //         <h2 className="cardTitle">{props.cardTitle}</h2>
    //         <p className="cardDescription">{props.cardDescription}</p>
    //         <button className="cardButton" href={props.cardReference}>View Card</button>
    //         <p className="cardDate">{props.date}</p>
    //     </div>
    // </div>
}



// An idea for this would make a popup asking for each of the card's details