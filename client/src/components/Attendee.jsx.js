import React from 'react';
import styles from '../styles/attendee.css';


class Attendee extends React.Component {
  render () {
    return (
      <div className={styles.attendee}>
      <img className={styles.attendee_picture} src={this.props.user.photoURL}/>
        <div className={styles.attendee_name}>{this.props.user.first + ' ' + this.props.user.last}</div>
        <div className={styles.attendee_role}>Member</div>
      </div>
      )
  }
}

export default Attendee