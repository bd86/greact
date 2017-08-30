import React      from 'react';
import ReactDOM   from 'react-dom';
import Articles   from './Articles';
import Beats      from './Beats';
import Game       from './Game';
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
