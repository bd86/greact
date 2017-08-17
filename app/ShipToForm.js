import React from 'react';

class ShipToForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: 'First Name',
      lname: 'Last Name',
      address1: 'Address Line 1',
      address2: 'Address Line 2',
      city: 'City',
      state: 'State',
      zip: 'Zipcode',
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
    console.log(this.state);
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
          First Name:
          <input type="text" name="fname" placeholder={this.state.fname} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lname" placeholder={this.state.lname} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Address1:
          <input type="text" name="address1" placeholder={this.state.address1} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Address2:
          <input type="text" name="address2" placeholder={this.state.address2} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" placeholder={this.state.city} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          State:
          <input type="text" name="state" placeholder={this.state.state} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Zip:
          <input type="text" name="zip" placeholder={this.state.zip} onChange={this.handleInputChange} />
        </label>
        <br />
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ShipToForm;