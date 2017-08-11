import React from 'react';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stories: []};
    }

    componentDidMount() {
        //console.log('CALLED');
        //let reqTest = "./data/data.json";
        let reqTest = "https://jsonplaceholder.typicode.com/photos"
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
                    return <div key={'sec_'+index}>
                                <h1 key={'title_'+index}>{storie.title}</h1>
                                <img key={'img_'+index} src={storie.thumbnailUrl}/>
                            </div>                    
                })}
            </div>
        );
    }
}

export default Articles;