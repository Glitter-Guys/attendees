//app.jsx
import React from 'react';
import Attendees from './Attendees.jsx';
import mockData from '../../../mockData';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          numberOfAttendees: mockData.length,
          eventUsers: mockData
        }
    }

    render() {
      console.log(this.state.eventUsers)
      return (
        <div className="app">
        <div className="attendees_header"> 
        <div className="attendees_count"> Attendees {'(' + this.state.numberOfAttendees + ')'} </div>
        <div className="seeAll"> See All </div>
        </div>
        <Attendees eventUsers={this.state.eventUsers} />
        </div>
        )
    }
}

export default App;



