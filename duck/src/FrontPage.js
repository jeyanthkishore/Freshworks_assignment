import React from "react";
import { Button } from "react-bootstrap";

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.BG_CLASS = "body--bg";
    this.formClick = this.formClick.bind(this);
    this.responseClick = this.responseClick.bind(this);
  }

  componentDidMount() {
    document.body.classList.add(this.BG_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(this.BG_CLASS);
  }
  
  formClick() {
    this.props.history.push("/form");
  }

  responseClick() {
    this.props.history.push("/display");
  }

  render() {
    return (
      <div className="container" style={{
            paddingTop: "220px",
          }}>
        <Button onClick={this.formClick} className="btn btn-primary btn-lg btn-block btn-warning">
            Form
          </Button>
        <Button onClick={this.responseClick} className="btn btn-primary btn-lg btn-block btn-warning">
            Response
          </Button>
        </div>
    );
  }
}
export default FrontPage;
