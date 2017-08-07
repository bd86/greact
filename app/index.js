import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.test}</h1>
            </div>
        )
    }
}

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stories: []};
    }

    componentDidMount() {
        //console.log('CALLED');
        let reqTest = "./data/data.json";
        fetch(reqTest)
            .then((response) => { return response.json(); })
            .then((data) => {
                //data.forEach(function(info){
                    //console.log(data);
                    this.setState({
                         stories: data
                    });
                    // console.log(this.state.stories[0].title);
                //});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        //console.log(this.state.stories[1]);
        return (
            <div>
                {this.state.stories.map((storie,index) => {
                    return <div key={index+'div'}>
                                <h1 key={index}>{storie.title}</h1>
                                <p key={index+'para'}>{storie.body}</p>
                            </div>                    
                })}
            </div>
        );
    }
}

class Clock extends React.Component {
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

ReactDOM.render(
    <Clock />,
    document.getElementById('app')
);

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