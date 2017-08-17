import React      from 'react';
import ReactDOM   from 'react-dom';
import Articles   from './Articles';
import Beats      from './Beats';
import Game       from './Game';
import EmailForm  from './EmailForm';
import ShipToForm from './ShipToForm';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <ShipToForm />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
