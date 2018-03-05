import React from 'react';

class Attendee extends React.Component {
  render () {
    return (
      <div className="attendee">
      <img className="attendee_picture" src={this.props.user.photoURL}/>
        <div className="attendee_name">{this.props.user.first + ' ' + this.props.user.last}</div>
        <div className="attendee_role">Member</div>
      </div>
      )
  }
}

export default Attendee