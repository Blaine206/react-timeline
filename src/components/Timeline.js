import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import Timestamp from './Timestamp';



const Timeline = (props) => {
  
  const timelineEvents = props.events.map((timelineEvent, i)  => {
    return (
      <li key={i}>
        <TimelineEvent person={timelineEvent.person} status={timelineEvent.status} timeStamp= {timelineEvent.timeStamp}/>
      </li>
    );
  });

  return (
    <ul>
      {timelineEvents}
    </ul>
  );
};
// This will will take a list of timeline events as a prop and render a list of TimelineEvent components:
// 1 Prop
// events
// an array of JavaScript object
// render function will render set of TimelineEvent components

export default Timeline;