import React from "react";
import Swal from "sweetalert2";
import axios from "axios";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          Name: "",
          Time: "",
          Food: "",
          Location: "",
          Count: "",
          Quantity: "",
        },
      ],
    };
  }

  componentDidMount() {
    axios
        .get("https://freshworks-assignment.herokuapp.com/api/alldata")
      .then((response) => {
        if (response.data.length >0) {
          Swal.fire(response.data.length+ " Record Displayed");
          this.setState({
            items: response.data,
          })
        }
        })
        .catch(function (error) {
          Swal.fire("Failure, Try again after sometime");
        });
  }
  render() {
    return (
      <div className="container" style={{
            maxWidth: "1500px",
          }}>
        <div className="jumbotron mt-5 container-style">
          <h1 className="text-center">Ducks Lives Matter</h1>
          <table
            id="items"
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              borderCollapse: "collapse",
              border: "3px solid #ddd",
              width: "100%",
            }}
            className="table col-md-10 mx-auto"
          >
            <tbody>
              <tr>
                {this.headerList}
                {Object.keys(this.state.items[0]).map((key, index) => {
                  return (
                    <th
                      style={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        textAlign: "center",
                        backgroundColor: "#4CAF50",
                        color: "white",
                      }}
                      key={index}
                    >
                      {key.toUpperCase()}
                    </th>
                  );
                })}
              </tr>
              {this.state.items.map((item, id) => {
                const { Name, Time, Food, Location, Count, Quantity } = item;
                return (
                  <tr key={id}>
                    <td>{Name}</td>
                    <td>{Time}</td>
                    <td>{Food}</td>
                    <td>{Location}</td>
                    <td>{Count}</td>
                    <td>{Quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Display;
