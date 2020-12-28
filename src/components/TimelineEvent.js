import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event">
      <section className= "event-person">
        <p>{ props.person }</p>
      </section> 
      <section className="event-status ">
        <p>{ props.status }</p>
      </section>
      <section className="event-time">
        {/* {<Timestamp time= {TimelineEvent.timestamp}/>} */}
        <p>{ props.timestamp }</p> 
      </section> 
    </div>      
  );
}

export default TimelineEvent;