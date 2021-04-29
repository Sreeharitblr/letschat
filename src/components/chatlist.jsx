import React from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlusCircleFill } from "react-bootstrap-icons";

function ChatList(props) {
  return (
    <Card
      className="shadow-lg"
      text="white"
      style={{
        borderColor: "#FF0266",
        borderWidth: "3px",
        backgroundColor: "#4B4753",
        borderRadius: "20px",
        height: "630px",
        width: "350px",
      }}
    >
    
      <InputGroup
        className="mb-3"
        style={{ width: "300px", marginTop: "5%", marginLeft: "6%" , opacity:0 }}
      >
        <FormControl
          placeholder="Username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button disabled={true} variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>

      <Button
        className="shadow-lg rounded-pill"
        style={{
          marginTop: "142%",
          marginLeft: "40%",
          width: "70px",
          height: "50px",
          borderColor: "#FF0266",
          borderWidth: "2px",
        }}
      >
        <i>
          <PlusCircleFill />
        </i>
      </Button>
    </Card>
  );
}

export default ChatList;
