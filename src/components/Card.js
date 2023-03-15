import React from "react";
import "./CardStlyes.css";

export default function Card(){
    return (
        <div className="card">
            <div className="cardBody">
                <h2 className="cardTitle">Card</h2>
                <p className="cardDate">Card Date</p>
                <p className="cardDescription">Card Description</p>
            </div>
        </div>      
    )
}

