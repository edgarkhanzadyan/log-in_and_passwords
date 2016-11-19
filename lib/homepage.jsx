'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Output from './output';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'EdgarJ', password: 'cool', active: false, time: 0},
        {name: 'Mari', password: '12345678', active: false, time: 0},
        {name: 'Tigran', password: 'qwerty', active: false, time: 0},
      ],
    };
    this.sendUser = this.sendUser.bind(this);
  }

  componentDidMount(){
    console.log('Mounted');
  }
  sendUser(newArr){
    this.setState({users: newArr})
  }
  render() {
    const style = {
      mainContainer: {
        display: 'flex',
        height: '100vh',
        width: '100wh',
      },
    };
    return (
      <div style = {style.mainContainer}>
        <Input users={this.state.users}
          sendUser={this.sendUser}/>
        <Output users={this.state.users}/>
      </div>
    );
  }
};

ReactDOM.render(<Main />,
		document.getElementById('react-container'));
