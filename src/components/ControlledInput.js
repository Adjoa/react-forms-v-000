import React from 'react';
 
class ControlledInput extends React.Component {
  constructor() {
    super();
 
    this.state = {
      value: 'Hello!',
    };
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
 
  render() {
    return (
      <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange} // This handleChange function can allow us to validate input before updating state. 
      />
    );
  }
}
 
export default ControlledInput;
