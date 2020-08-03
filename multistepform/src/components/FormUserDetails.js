import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

export class FormUserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  onChangeFName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  continue = (e) => {
    e.preventDefault();
    console.log(`Form Submitted:`);
    console.log(`FName: ${this.state.firstName}`);
    console.log(`LName: ${this.state.lastName}`);
    console.log(`Email: ${this.state.email}`);

    const newMultiStep = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    axios
      .post("http://localhost:5000/multisteps/add", newMultiStep)
      .then((res) => {
        console.log(res.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    });
    // PROCESS FORM //
    this.props.nextStep();
  };

  // continue = e => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter User Details" />
            <TextField
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={this.onChangeFName}
              value={this.state.firstName}
              // onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.onChangeLName}
              value={this.state.lastName}
              placeholder="Enter Your Last Name"
              label="Last Name"
              // onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              type="text"
              name="email"
              id="email"
              onChange={this.onChangeEmail}
              value={this.state.email}
              placeholder="Enter Your Email"
              label="Email"
              // onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
