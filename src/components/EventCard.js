import React from "react";

const EventCard = (props) => {
    return(
        <div className="card">
            <div className ="card-content">
                 <h3>{props.event.id}</h3>
            </div>
        </div>
    );
}

export default EventCard