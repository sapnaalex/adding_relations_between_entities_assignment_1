import React from "react";


function DestinationCard({ destination }){
    return(
        <div className="card">
            <img src={destination.image} alt={destination.name} className="card-image" />
            <div className="card-content">
                <h2>{destination.name}</h2>
                <h3>{destination.location}</h3>
                <h4>{destination.description}</h4>
                <p className="price">{destination.price}</p>
            </div>
        </div>
    );
}

export default DestinationCard;