import React from 'react';

class Attendee extends React.Component {
  render () {
    return (
      <div className="attendee">
      <img className="attendee_picture" src={this.props.user.photoURL}/>
        <div>{this.props.user.firstName + ' ' + this.props.user.lastName}</div>
        <div>Member</div>
      </div>
      )
  }
}

export default Attendee