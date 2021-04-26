import React from "react";
import { Button } from "react-bootstrap";
import "./Form.css";
import img from "./duck.jpg";
import Swal from "sweetalert2";

class Forms extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      Time: "",
      Food: "",
      Location: "",
      Count: 0,
      Quantity: 0,
      Name: "",
    };
    this.formStyle = {
    borderRadius: "18px",
    padding: "20px",
    width: "200px",
    height: "15px",
  };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }

  handleClick(event) {
    event.preventDefault();
    if (
      this.state.Time === "" ||
      this.state.Food === "" ||
      this.state.Location === "" ||
      this.state.Count === "" ||
      this.state.Quantity === "" ||
      this.state.Name === ""
    ) {
      Swal.fire("Please Fill All The Required Details");
      return;
    }
    if (this.state.Quantity <0 || this.state.Count <0) {
      Swal.fire("Negative Value not Allowed");
      return;
    }
    if (this.state.Quantity.length > 8 || this.state.Count.length > 8) {
      Swal.fire("Count Should Not Be More Than 8 Digits");
    }
   
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5 container-style">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Ducks Lives Matter</h1>
          </div>
          <form className="center" onSubmit={this.handleClick}>
            <table className="table col-md-10 mx-auto">
              <tbody>
                <tr>
                  <td>
                    <span style={{ float: "left" }}>
                      <p>Name of the person?</p>
                      <input
                        type="text"
                        name="Name"
                        defaultValue={this.state.Name}
                        onChange={this.handleChange}
                        style={this.formStyle}
                      />
                    </span>
                    <span style={{ float: "right" }}>
                      <p>What time the ducks are fed?</p>
                      <input
                        type="text"
                        name="Time"
                        defaultValue={this.state.Time}
                        onChange={this.handleChange}
                        style={this.formStyle}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ float: "left" }}>
                      <p>What food the ducks are fed?</p>
                      <input
                        type="text"
                        name="Food"
                        defaultValue={this.state.Food}
                        onChange={this.handleChange}
                        style={this.formStyle}
                      />
                    </span>
                    <span style={{ float: "right" }}>
                      <p>Where the ducks are fed?</p>
                      <input
                        type="text"
                        name="Location"
                        defaultValue={this.state.Location}
                        onChange={this.handleChange}
                        style={this.formStyle}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ float: "left" }}>
                      <p>How many the ducks are fed?</p>
                      <input
                        type="number"
                        name="Count"
                        defaultValue={this.state.Count}
                        onChange={this.handleChange}
                        style={this.formStyle}
                      />
                    </span>
                    <span style={{ float: "right" }}>
                      <p>How much food ducks are fed?</p>
                      <input
                        type="number"
                        name="Quantity"
                        minvalue="0"
                        defaultValue={this.state.Quantity}
                        onChange={this.handleChange}
                        style={this.formStyle}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style={{ float: "center", paddingTop: 40 }}>
                      <Button className="btn btn-primary btn-lg btn-block btn-warning" type="submit">
                        Submit
                      </Button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
export default Forms;
