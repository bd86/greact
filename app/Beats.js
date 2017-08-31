import React from 'react';

class Beats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: "Load"};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let now = new Date();
    let makeBeat = (now.getUTCSeconds() + (now.getUTCMinutes() * 60) + ((now.getUTCHours()+1) * 3600)) / 86.4;
    let beat = Math.round(makeBeat);
    this.setState({
      date: beat
    });
  }

  render() {
    return (
      <div>
        <h1>Hey</h1>
        <h2>It's @{this.state.date.toString()} BEATS.</h2>
      </div>
    );
  }
}

export default Beats;