import React      from 'react';
import ReactDOM   from 'react-dom';
//import Beats      from './Beats';
import ColorSwitcher from './ColorSwitcher';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ColorSwitcher />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
