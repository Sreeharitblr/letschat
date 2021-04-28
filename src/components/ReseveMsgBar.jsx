import React from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowRight, ArrowRightCircleFill } from "react-bootstrap-icons";

function ReseveMsgBar(props) {
  return (
    <>
      <Card
        text="white"
        style={{
          marginRight: "45%",
          backgroundColor: "#5C6BC0",
          width: "25rem",
          padding: ".5%",
          marginTop:"3%",
          borderRadius: "20px 20px 20px 0px",
        }}
      >
        <Card.Text style={{ fontSize: "16px" }}>
          {props.socketMessage.msg}
          <p style={{fontSize:"9px",marginRight:"70%"}}>{props.socketMessage.time}</p>
        </Card.Text>
      </Card>
    </>
  );
}

export default ReseveMsgBar;
