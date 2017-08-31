import React      from 'react';
import ReactDOM   from 'react-dom';
import Beats      from './Beats';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Beats />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
