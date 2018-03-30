import React from 'react';
import fetch from 'isomorphic-unfetch';
import Attendees from './Attendees';
// import styles from './styles/index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps(props) {
    let res = await fetch(`http://localhost:9000/api/${props.query.eid}/attendees`);
    res = await res.json();
    const data = [];
    for (let i = 0; i < res.length; i += 1) {
      let { row } = res[i];
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
      numberOfAttendees: res.length,
    };
  }
  render() {
    return (
      <div className="app">
        <div className="attendees_header"> 
          <div className="attendees_count"> Attendees {'(' + this.props.numberOfAttendees + ')'} </div>
          <div className="seeAll"> See All </div>
        </div>
        <Attendees eventUsers={this.props.eventUsers} />
        <style jsx> {`
          .app {
            background-color: #F6F7F8;
            float: left;
            padding: 30px;
          }
          .attendees_header {
            background-color: #F6F7F8;
            display: inline-block;
            padding-bottom: 20px;
          }
          .attendees_count {
            display: inline-block;
            font-family: Graphik Meetup,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;
            font-size: 20px;
            text-decoration: bold;
              background-color: #F6F7F8;
          }
          .seeAll {
            display: inline-block;
            background-color: #F6F7F8;
            position: relative;
            left: 450px;
            color: #00a2c7;
            font-family: Graphik Meetup,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;
            font-size: 16px;
          }
          .seeAll:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
