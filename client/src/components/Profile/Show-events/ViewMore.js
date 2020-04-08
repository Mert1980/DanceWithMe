import React, { Component } from 'react'
import { Table } from 'reactstrap';




class ViewMore extends Component {
  state =  {
  events : []
  }
  handleGetRequest = async () => {
    
    const request = await fetch(url);
    const respond = await request.json();
    this.setState({events :respond.results}) 
    console.log(this.state.events)
  }
  componentDidMount() {
   this.handleGetRequest();  
  } 
  render() {
    let events =this.state.events.map((event ,id)=>{
      return (
        <tr key={id}>
          <th scope="row">{id+1}</th>
          <td>{event.eventname}</td>
          <td>{event.date}</td>
          <td>{event.venue.town}</td>
          <td>
              <div className="col-sm-3">
                <a href={event.link} target="_blank"><button  type="button" className="btn btn-outline-success mt-2">
                <small>See More</small></button></a>
              </div>
          </td>
        </tr>
    

      )
    })
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
      <tbody>
        {events}
      </tbody>
    </Table>
     
      
    )
  }
}

export default ViewMore
