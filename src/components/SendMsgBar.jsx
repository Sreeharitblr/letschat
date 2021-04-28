import React from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowRight, ArrowRightCircleFill } from "react-bootstrap-icons";

function SendMsgBar(props) {
  return (
    <>
      <Card
        text="white"
        style={{
          marginLeft: "35%",
          backgroundColor: "#BA68C8",
          width: "25rem",
          padding: ".5%",
          marginTop:"3%",
          borderRadius: "20px 20px 0px",
        }}
      >
        <Card.Text style={{ fontSize: "16px" }}>
        {props.sendmessage.msg}
        <p style={{fontSize:"9px",marginLeft:"70%"}}>{props.sendmessage.time}</p>
        </Card.Text>
      </Card>
    </>
  );
}

export default SendMsgBar;
