import React from "react";
import { Button } from "react-bootstrap";
import img from "./duck.jpg";

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.BG_CLASS = "body--bg";
  }

  componentDidMount() {
    document.body.classList.add(this.BG_CLASS);
  }

  render() {
    return (
      <div className="container" style={{
            paddingTop: "220px",
          }}>
          <Button href="/form" className="btn btn-primary btn-lg btn-block btn-warning">
            Form
          </Button>
          <Button href="/display"className="btn btn-primary btn-lg btn-block btn-warning">
            Response
          </Button>
        </div>
    );
  }
}
export default FrontPage;
