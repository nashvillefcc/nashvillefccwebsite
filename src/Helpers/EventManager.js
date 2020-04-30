//Event Manager

//In order to use the mockupAPI, please use Mockoon to
//set up an import with MockoonAPI.json and run the fake
//server from the application


//TODO: Add a try/catch where HTTPS fails to use HTTP next. 
//Will do this when the time comes for OAuth setups
const remoteURL = "http://localhost:3001"

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