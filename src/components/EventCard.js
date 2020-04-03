import React from "react";

const EventCard = (props) => {
    return(
        <div className="card">
            {console.log(props.event)}
            <div className ="card-content">
                 <h3>{props.event.name}</h3>
            </div>
        </div>
    );
}

export default EventCard