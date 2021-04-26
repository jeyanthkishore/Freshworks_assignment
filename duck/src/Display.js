import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import img from "./duck.jpg";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          Name: "Aaru",
          Time: "12:40",
          Food: "Parotta",
          Location: "Chennai",
          Count: 24,
          Quantity: 340,
        },
        {
          Name: "Chari",
          Time: "1:35",
          Food: "Biriyani",
          Location: "Coimbatore",
          Count: 22,
          Quantity: 530,
        },
        {
          Name: "Kichu",
          Time: "3:43",
          Food: "Pongal",
          Location: "Viruthunagar",
          Count: 12,
          Quantity: 330,
        },
        {
          Name: "Ramu",
          Time: "4:55",
          Food: "Rat Food",
          Location: "Burma",
          Count: 5,
          Quantity: 420,
        },
      ],
    };
  }

  render() {
    return (
      <div className="container" style={{
            maxWidth: "1500px",
          }}>
        <div
          className="jumbotron mt-5 container-style"
        >
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
