import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  return (
    <ul className="timeline">
    <li>
      <TimelineEvent person="????" status="HuH???" />
    </li>
  </ul>
  );
};
// This will will take a list of timeline events as a prop and render a list of TimelineEvent components:
// 1 Prop
// events
// an array of JavaScript object
// render function will render set of TimelineEvent components

export default Timeline;