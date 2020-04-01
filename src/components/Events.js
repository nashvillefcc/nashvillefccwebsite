import React, {useState, useEffect} from "react"
import EventCard from './EventCard'
import EventManager from '../Helpers/EventManager'

const Events = () => {
    const [events, setEvents] = useState([]);

    function fetchData() {
        return EventManager.getAll().then(results => {
            setEvents(results)
        });      
    };

    useEffect(() => {
        fetchData();
    },[]);



    return(
        
        <div className = "card-containers">
            {events.map(event => 
            <EventCard key = {event.id} event = {event}/>
            )}
        </div>
    )
}

export default Events