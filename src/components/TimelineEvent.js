import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div>
      <p>Person: { props.person }</p>
      <p>Status: { props.status }</p>
      <p>Timestamp: { props.timestamp }</p>
    </div>    

  );
}

export default TimelineEvent;