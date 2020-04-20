import React, { Component } from "react";

// We use skiddle api to fetch events
const url = `https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.REACT_APP_SKIDDLE_API_KEY}&GB&eventcode=THEATRE&order=distance&date=1&limit=3&imagefilter=1&description=1&under18=0`;

class EventHandler extends Component {
  // Initial state of the events variable is an empty array
  state = {
    events: [],
  };
  handleGetRequest = async () => {
    const request = await fetch(url);
    const respond = await request.json();
    
    // Once we fetch events from API, we store them into events variable
    this.setState({ events: respond.results });
  };
  componentDidMount() {
    this.handleGetRequest(); 
  }

  // We render name, date, location and link of the event
  render() {
    return (
      <div>
        {this.state.events.length > 0 &&
          this.state.events.map((event) => {
            return (
              <div key={event.id} className="container">
                <div className="row mt-1">
                  <div className="col-sm-9">
                    <h6 className="font-weight-bold">{event.eventname}</h6>
                    <small>{event.date}</small>
                    <p className="text-info">Location : {event.venue.town}</p>
                  </div>
                  <div className="col-sm-3">
                    <a href={event.link} target="_blank">
                      <button
                        type="button"
                        className="btn btn-outline-success mt-2"
                      >
                        <small>See More</small>
                      </button>
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    );
  }
}

export default EventHandler;
