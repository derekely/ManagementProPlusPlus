import React from "react";
import "./CardStlyes.css";

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
}

