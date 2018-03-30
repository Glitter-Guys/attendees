import React from 'react';
import AttendeesIndex from ('./attendees/index');

const YouDown = props => {
  return (
    <div>
      <AttendeesIndex eid={props.query.eid} />
    </div>
  );
};

export default YouDown;
