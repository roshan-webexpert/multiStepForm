import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import axios from "axios";

export class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      bio: "",
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

  onChangeOccupation(e) {
    this.setState({
      occupation: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeBio(e) {
    this.setState({
      bio: e.target.value,
    });
  }

  continue = (e) => {
    e.preventDefault();
    console.log(`Form Submitted:`);
    console.log(`FName: ${this.state.firstName}`);
    console.log(`LName: ${this.state.lastName}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Occupation: ${this.state.occupation}`);
    console.log(`City: ${this.state.city}`);
    console.log(`Bio: ${this.state.bio}`);

    const newMultiStep = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      occupation: this.state.occupation,
      city: this.state.city,
      bio: this.state.bio,
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
      occupation: "",
      city: "",
      bio: "",
    });
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText
                  // onChange={this.onChangeFName}
                  // value={this.state.firstName}
                  primary="First Name"
                  secondary={firstName}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Last Name"
                  // onChange={this.onChangeLName}
                  // value={this.state.lastName}
                  secondary={lastName}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Email"
                  // onChange={this.onChangeEmail}
                  // value={this.state.email}
                  secondary={email}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Occupation"
                  // onChange={this.onChangeOccupation}
                  // value={this.state.occupation}
                  secondary={occupation}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="City"
                  // onChange={this.onChangeCity}
                  // value={this.state.city}
                  secondary={city}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Bio"
                  // onChange={this.onChangeBio}
                  // value={this.state.bio}
                  secondary={bio}
                />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Confirm & Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
