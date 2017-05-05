import React from 'react';

class Clock extends React.Component{
  constructor(props){
   super(props);
   this.state = {title: "Clock", time: new Date()};
   this.interval = 0;
   this.tick = this.tick.bind(this);
  }

  render(){
    const { time } = this.state;
    return (
      <h1>
        <div className="clock">
          {this.state.title}
          <p className="time">
            Time:
            <span>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span>
          </p>
          <p className="date">
            Date:
            <span>{time.getDay()}/{time.getUTCMonth()}/{time.getFullYear()}</span>
          </p>
        </div>
      </h1>
    );
  }

  tick(){
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
}



export default Clock;
