//app.jsx
import React from 'react';
import axios from 'axios';
import Attendees from './Attendees.jsx';
import styles from '../styles/app.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          numberOfAttendees: 0,
          eventUsers: []
        }
    }

    componentDidMount() {
      this.getAttendees();
    }


    getAttendees() {
      const url = window.location.href;
      const urlEnd = url.split('/event/')[1];
      const eventId = urlEnd.split('/')[0];
      // const eventId = 'mxstsmyxgbhb'
      axios.get(`/api/${eventId}/attendees`)
        .then((res) => {
          this.state.eventUsers = res.data;
          this.state.numberOfAttendees = res.data.length;
          this.setState((state) => ({
            eventUsers: this.state.eventUsers,
            numberOfAttendees: this.state.numberOfAttendees,
          }))
        })
        .catch((err) => {
          throw err;
      })
    }


    render() {
      return (
        <div className={styles.app}>
        <div className={styles.attendees_header}> 
        <div className={styles.attendees_count}> Attendees {'(' + this.state.numberOfAttendees + ')'} </div>
        <div className={styles.seeAll}> See All </div>
        </div>
        <Attendees eventUsers={this.state.eventUsers} />
        </div>
        )
    }
}

export default App;
window.Attendees = App;
