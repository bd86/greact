import React from 'react';

class EmailForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuest: 2,
      email: 'Email'
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
    console.log(this.state.email);
    let data = new FormData();
    data.append('name', 'testername');
    fetch('/ajax/code.php', {
      method: 'post',
      body: data
    }).then((response) => {
      console.log('RES: ' + response);
    }).then((data) => {
      console.log('DATA: ' + data);
    });
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
          Email:
          <input type="text" name="email" placeholder={this.state.email} onChange={this.handleInputChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EmailForm;
