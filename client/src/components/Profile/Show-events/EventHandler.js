import React, { Component } from 'react'




class EventHandler extends Component {
  state =  {
  events : []
  }
  handleGetRequest = async () => {
    //e.preventDefault()
    const request = await fetch(url);
    //console.log(request)
    const respond = await request.json();
    //console.log(respond)
    this.setState({events :respond.results}) 
    console.log(this.state.events)
  }
  componentDidMount() {
   this.handleGetRequest();  // we dont need anymore. Because when we want to data uploading, we will click submit button
  } 
  render() {
    
    return (
      <div>
     
     
      {this.state.events.length> 0 && this.state.events.map((event)=>{
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
                                <button  type="button" className="btn btn-outline-success mt-2"><small>See More</small>
                                </button></a>
                                
                            </div>
                        </div>
                        <hr/>
                        
            </div>
           
        )
      })}
      </div>
    )
  }
}

export default EventHandler
