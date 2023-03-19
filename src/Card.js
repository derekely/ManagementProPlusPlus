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
