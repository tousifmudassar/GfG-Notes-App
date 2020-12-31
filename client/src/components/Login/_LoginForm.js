import React, { Component } from "react";
import FormGroup from "../Forms/FormGroup";

export class LoginForm extends Component {
  state = {
    Username: "",
    Password: ""
  };
  handleChange = e => {
    console.log(`${e.target.name}: ${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAuth(this.state.Username, this.state.Password);
  };
  render() {
    return (
      <form className="LoginForm" onSubmit="handleSubmit">
        <h2>Login</h2>
        {[
          {
            Id: "Username",
            Type: "text",
            Value: this.state.Username,
            Desc: "Put your username in right case"
          },
          {
            Id: "Password",
            Type: "password",
            Value: this.state.Password,
            Desc: "Put your password that you might have forgotten"
          }
        ].map((fg, key) => {
          fg.Label = fg.Id;
          fg.Value = this.state[fg.Id];
          return <FormGroup {...fg} key={key} onChange={this.handleChange} />;
        })}
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
    );
  }
}

export default LoginForm;
