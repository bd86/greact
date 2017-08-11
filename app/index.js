import React    from 'react';
import ReactDOM from 'react-dom';
import Articles from './Articles';
import Beats    from './Beats';
import Game     from './Game';
import './index.css';


class App extends React.Component {
    render() {
        return (
            <div>
                <Beats />
                <Game />
                <Articles />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

//https://jsonplaceholder.typicode.com/photos
// getData() {
//     let reqTest = "https://jsonplaceholder.typicode.com/posts";
//     fetch(reqTest)
//         .then(function(response) { return response.json(); })
//         .then(function(data) {
//             for (let i = 0; i < data.length; i++) {
//                 console.log(data[i].title);
//             }
//         });
// }