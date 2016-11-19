'use strict'

import React from 'react';

export default

class Output extends React.Component {
  constructor(){
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {time: ''}
  }
  clickHandler(e){
    const timeNow = Date.now();
    let substSec = Math.round((timeNow - this.props.users[e.currentTarget.id].time)/1000);
    let substMin = 0;
    while(substSec >= 60){
      ++substMin;
      substSec %= 60;
    }
    let message = '';
    if(substMin === 0){
      message = substSec + 'seconds';
    }else{
      message = substMin + 'minutes' + substSec + 'seconds';
    }
    this.setState({time: message});
  }
  render(){
    const style = {
      timeContainer: {
        display: 'flex',
        flexDirection: 'column',
      },
      usersCont: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #4CAF50',
        width: '50vw',
        height: '40vh',
        margin: '10px 10px 10px 0',
        overflowY: 'scroll'
      },
      timeIn: {
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
      },
      button: {
        width: '100%',
        backgroundColor: "#4CAF50",
        color: 'white',
        padding: '14px 20px',
        margin: '8px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }
    };
    const makeUsers = this.props.users.map((user, idx) => {
      if(user.active){
        return(
          <button style={style.button} key={idx} id={idx} onDoubleClick={this.clickHandler}>{user.name}</button>
        );
      }
    })
    return(
      <div style={style.timeContainer}>
        <div style={style.usersCont}>
          {makeUsers}
        </div>
        <div style={style.timeIn}>
          {this.state.time}
        </div>
      </div>
    );
  }
}
