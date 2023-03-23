import React from "react";
import "./CardStlyes.css";

export default function Card(props){
    return (
        <div className="card">
            <div className="cardBody">
                <h2 className="cardTitle">{props.cardTitle}</h2>
                <p className="cardDescription">{props.cardDescription}</p>
                <p className="cardDate">{props.cardDate}</p>
            </div>
        </div>      
    )
}

