import React from "react";
//James:
//ReactHtmlParser takes the string with all the tag elements
//from the event description and parses it accordingly and safely
//without exposing the site with dangerouslySetInnerHTML
import ReactHtmlParser from 'react-html-parser'; 

const EventCard = (props) => {
    return(
        <div className="card">
            {console.log(props.event)}
            <div className ="card-content">
                 <h3>{props.event.name}</h3>
                 <p>{props.event.status}</p>
                 <p>When: {props.event.local_date} {props.event.local_time}</p>
                 {ReactHtmlParser (props.event.description)}
                 <a href = {props.event.link}>Link to Event</a>
            </div>
        </div>
    );
}

export default EventCard