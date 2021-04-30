import React, { useState, useEffect } from "react";
import "../App.css";
import {
  Form,
  Button,
  Card,
  InputGroup,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlusCircleFill } from "react-bootstrap-icons";
import ChatListGrp from './ChatListGrp'

function ChatList(props) {
  const [visible, setVisible] = useState(0);
  const [roomName, setroomName] = useState("");
  const [roomNameArr, setroomNameArr] = useState([]);
  const [click, setClick] = useState(false);
  const [roomid, setroomid] = useState([]);

  //console.log("grp", props.Grp);
  

  useEffect(() => {
    props.Grp === undefined ? console.log("sd") : setroomNameArr([...props.Grp]);
    //console.log(roomNameArr);
  },[visible],[roomName]);


  //setroomNameArr((roomNameArr) => [...roomNameArr, props.Grp]);
  useEffect(() => {
    props.roomSet(roomid);
  }, [click]);

  const setingRoom = (ele) => {
    setClick(!click);
    setroomid({ roomid: ele, status: !click });
  };

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
        style={{
          width: "300px",
          marginTop: "5%",
          marginLeft: "6%",
          opacity: visible,
        }}
      >
        <FormControl
          placeholder="Username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            setroomName(e.target.value);
          }}
        />
        <InputGroup.Append>
          <Button
            disabled={visible === 0}
            variant="outline-secondary"
            onClick={() => {
              setroomNameArr((roomNameArr) => [
                ...roomNameArr,
                roomName + "_" + Math.random(),
              ]);
            }}
          >
            ADD
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <div
        className="scrollbar-hidden"
        style={{ overflowY: "scroll", width: "90%", marginLeft: "5%" }}
      >
        <NavDropdown.Divider className="text-primary" />
        {roomNameArr.map((ele) => {
          let tempname = ele.split("_");
          return (
            <>
            <ChatListGrp name = {tempname[0]} rname={ele} click = {(rname)=>setingRoom(rname)}/>
              {/* <h4
                style={{ color: click === false ? "#FF1744" : "#00E676" }}
                onClick={() => setingRoom(ele)}
              >
                {tempname[0]} <NavDropdown.Divider className="text-primary" />
              </h4> */}
            </>
          );
        })}
      </div>

      <Button
        className="shadow-lg rounded-pill"
        style={{
          marginTop: "41%",
          marginLeft: "10%",
          width: "70px",
          height: "50px",
          borderColor: "#FF0266",
          borderWidth: "2px",
          position: "fixed",
        }}
        onClick={() => setVisible(visible === 1 ? 0 : 1)}
      >
        <i>
          <PlusCircleFill />
        </i>
      </Button>
    </Card>
  );
}

export default ChatList;
