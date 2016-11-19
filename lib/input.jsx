'use strict'

import React from 'react';

export default

class Input extends React.Component {
  constructor(){
    super();
    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state ={bufUser: '', bufPass: ''}
  }
  clickHandler(e){
    let users = this.props.users;
    for(let i = 0; i < users.length; ++i){
      if(this.state.bufUser === users[i].name && this.state.bufPass === users[i].password){
        users[i].active = true;
        users[i].time = Date.now();
      }
    }
    this.props.sendUser(users);
    this.setState({bufUser: '', bufPass: ''})
  }
  onUserChange(e){
    const user = e.currentTarget.value;
    this.setState({bufUser: user});
  }
  onPasswordChange(e){
    const password = e.currentTarget.value;
    this.setState({bufPass: password});
  }
  render(){
    const style = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #4CAF50',
        width: '50vw',
        height: '50vh',
        margin: '10px',
        textAlign: 'center',
        justifyContent: 'center',
      },
      input: {
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
    }
    return(
      <div style={style.container}>
        <input style={style.input} placeholder={'username'} onChange={this.onUserChange} value={this.state.bufUser} type={'text'}/>
        <input style={style.input} placeholder={'password'} onChange={this.onPasswordChange} value={this.state.bufPass} type={'password'}/>
        <button style={style.button} onClick={this.clickHandler}>submit</button>
      </div>
    );
  }
};
