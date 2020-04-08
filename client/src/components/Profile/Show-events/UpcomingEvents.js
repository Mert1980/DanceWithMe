import React, { Component } from 'react'
import EventHandler from "./EventHandler"
import { Link } from 'react-router-dom'


class UpcomingEvents extends Component {

  render() {
    
    return (
          <div>

                <div className="col-sm-5 ">
                    <h5 className="text-center py-3 bg-danger text-light border rounded font-weight-bold">Upcoming Events
                    </h5>
                    <EventHandler/>
                    <Link to="/viewMore">View More</Link>
                </div>
                
          </div>
         
    )
        
      
   
  
  }
}

export default UpcomingEvents
