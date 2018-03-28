import React from 'react';
// import styles from './styles/attendee.css';

class Attendee extends React.Component {
  render () {
    return (
      <div>
      <img src={this.props.user.photourl}/>
        <div>{this.props.user.first + ' ' + this.props.user.last}</div>
        <div>Member</div>
      </div>
      )
  }
};

export default Attendee;
