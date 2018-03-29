import React from 'react';
// import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Attendees from './Attendees';
// import styles from './styles/index.css';

class Index extends React.Component {
  constructor(props) {
      super(props);
  }
  static async getInitialProps(props) {
    console.log(props);
    const res = await fetch(`http://localhost:3009/api/${props.query.eid}/attendees`);
    console.log(res);
    const data = [];
    for (let i = 0; i < res.data.length; i += 1) {
      let row = res.data[i].row;
      row = row.slice(1, row.length - 1);
      row = row.split(',');
      data.push({
        first: row[0],
        last: row[1],
        photourl: row[2],
      });
    }
    return {
      eventUsers: data,
      numberOfAttendees: res.data.length,
    };
  }
  // componentDidMount() {
  //   this.getAttendees();
  // }
  // getAttendees() {
  //   const url = window.location.href;
  //   const urlEnd = url.split('/event/')[1];
  //   const eventId = urlEnd.split('/')[0];
  //   axios.get(`/api/${eventId}/attendees`)
  //     .then((res) => {
  //       const data = [];
  //       for (let i = 0; i < res.data.length; i += 1) {
  //         let row = res.data[i].row;
  //         row = row.slice(1, row.length - 1);
  //         row = row.split(',');
  //         data.push({
  //           first: row[0],
  //           last: row[1],
  //           photourl: row[2],
  //         });
  //       }
  //       // const data = res;
  //       this.state.eventUsers = data;
  //       this.state.numberOfAttendees = res.data.length;
  //       this.setState((state) => ({
  //         eventUsers: this.state.eventUsers,
  //         numberOfAttendees: this.state.numberOfAttendees,
  //       }))
  //     })
  //     .catch((err) => {
  //       throw err;
  //   })
  // }
  render() {
    return (
      <div>
        <div> 
          <div> Attendees {'(' + this.state.numberOfAttendees + ')'} </div>
          <div> See All </div>
        </div>
        <Attendees />
      </div>
    );
  }
}

export default Index;
// window.Attendees = App;
