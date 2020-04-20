import React, { Component } from "react";
import { Table } from "reactstrap";

// We use skiddle api to fetch events
// REACT_APP_SKIDDLE_API_KEY is stored in .env.development file
// There is no need to use dotenv package in React.
// Adding "REACT_APP_" as a prefix is enough
const url = `https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_SKIDDLE_API_KEY}&GB&eventcode=THEATRE&order=distance&date=1&limit=20&imagefilter=1&description=1&under18=0`;
class ViewMore extends Component {
  // Events are stored in an array
  state = {
    events: [],
  };
  handleGetRequest = async () => {
    // Fetches events from Skiddle API
    const request = await fetch(url);
    const respond = await request.json();

    // Assigns fethced data to events variable
    this.setState({ events: respond.results });
  };
  componentDidMount() {
    this.handleGetRequest();
  }
  render() {
    // Map and render every event
    // Event name, date, location and link is shown to the users 
    let events = this.state.events.map((event, id) => {
      return (
        <tr key={id}>
          <th scope="row">{id + 1}</th>
          <td>{event.eventname}</td>
          <td>{event.date}</td>
          <td>{event.venue.town}</td>
          <td>
            <div className="col-sm-3">
              <a href={event.link} target="_blank">
                <button type="button" className="btn btn-outline-success mt-2">
                  <small>See More</small>
                </button>
              </a>
            </div>
          </td>
        </tr>
      );
    });
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Event Location</th>
            <th>Event Link</th>
          </tr>
        </thead>
        <tbody>{events}</tbody>
      </Table>
    );
  }
}

export default ViewMore;
