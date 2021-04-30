import React, { useState, useEffect } from "react";
import "../App.css";
import {
  Card,
  Label,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatListGrp(props) {

  const [click, setclick] = useState(false);

  const setOnClick = ()=>{
    setclick(!click);
    props.click(props.rname);
  }
  return (
    <>
      <Card
        text="dark"
        style={{
          width: "300px",
          height: "50px",
          marginTop: "5%",
          marginLeft: "2%",
          backgroundColor: click === false ? "#FF1744" : "#00E676" ,
          borderRadius:"10px"
        }}
        onClick={()=>{setOnClick()}}
      >
        <label style={{paddingTop:"2%", }}>
          {props.name}
        </label>
      </Card>
    </>
  );
}

export default ChatListGrp;
