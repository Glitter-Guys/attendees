import React from 'react';
import Attendee from './Attendee.jsx';
// import styles from './styles/attendees.css';

class Attendees extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="attendees">
      <table>
        <tbody>
        <tr>
          {this.props.eventUsers.map( (user, index) => {
            if (index < 4) {
              return <td><Attendee key={index} user={user} /></td> 
            }
          })}
        </tr>
        <tr>
          {this.props.eventUsers.map( (user, index) => {
            if (index >= 4 && index < 8) {
              return <td><Attendee key={4 + index} user={user} /></td> 
            }
          })}
        </tr>
        </tbody>
      </table>
      <style jsx>{`
        .attendees {
          background-color: #F6F7F8;
          font: "Graphik Meetup";
        }
      `}</style>
      </div>
      )
  }
}

export default Attendees
