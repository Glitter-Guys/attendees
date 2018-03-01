import React from 'react';


class Attendee extends React.Component {
  render () {
    return (
      <div>
      <img src={this.props.user.photoURL}/>
        <div>{this.props.user.firstName + ' ' + this.props.user.lastName}</div>
      </div>
      )
  }
}

export default Attendee