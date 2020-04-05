//Event Manager

//In order to access the mockup data, type 
//"json-server -p 5002 -w mockAPI.json"
//in a seperate terminal of your choice.
const remoteURL = "http://localhost:5002"

export default {
  //Gets one event info based on ID.
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json())
  },
  //Gets all events
  getAll() {
    return fetch(`${remoteURL}/events`).then(result => result.json())
  }
}