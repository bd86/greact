import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuest: 2,
      fname: 'Enter name'
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     [name]: value
  //   });
  // }

  handleSubmit(event) {
    console.log(this.state.fname);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  //This should be the form
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="fname" value={this.state.fname} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Number of guest:
          <input
            name="numberOfGuest"
            type="number"
            value={this.state.numberOfGuest}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;


