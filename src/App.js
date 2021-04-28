import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowRight, ArrowRightCircleFill } from "react-bootstrap-icons";
import "./App.css";
import { useEffect, useState } from "react";
import { createStore } from "redux";
import { useDispatch, useSelector, Provider } from "react-redux";

import { getMeg } from "./axios/uri";
import chatReducer from "./redux/Reducer";
import { reseverData, sendData } from "./redux/Action";
import ReseveMsgBar from "./components/ReseveMsgBar";
import SendMsgBar from "./components/SendMsgBar";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3002";
const socket = socketIOClient(ENDPOINT);

function App() {
  const dispatch = useDispatch();

  const [sendMsg, setsendMsg] = useState([]);
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  // const [sendmessage, setSendmessage] = useState([]);
  const [socketMessage, setSocketMessage] = useState([]);
  //const [sendTO, setsendTo] = useState(true);
  let sendmessage = [];

  useEffect(() => {
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });

    socket.on("message", (data) => {
      setSocketMessage(data);
      dispatch(reseverData(data));
    });

    getMeg((result) => {
      setsendMsg(result);
    });
  }, []);

  const sendTO = () => {
    sendmessage = {
      msg: message,
      time: response,
      send: true,
    };
    socket.emit("messageAll", sendmessage);
    dispatch(sendData(sendmessage));
  };

  sendMsg.map((ele) => {
    //console.log("sdfsd",ele.msg);
  });
  //console.log("resp",response);
  let store = useSelector((state) => state);
  console.log("store", store);

  return (
    <div className="App">
      <header className="App-header">
        {store.map((ele) => {
          return ele.send === true ? (
            <SendMsgBar sendmessage={ele} />
          ) : (
            <ReseveMsgBar socketMessage={ele} />
          );
        })}

        <div
          style={{
            height: "50%",
            width: "70%",
            marginTop: "45%",
            position: "fixed",
          }}
        >
          <Form>
            <Container>
              <Row>
                <Col xs={12} md={10}>
                  <Form.Control
                    text="dark"
                    size="lg"
                    type="text"
                    style={{ borderRadius: "30px" }}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Col>
                <Col xs={6} md={1}>
                  <Button
                    size="lg"
                    style={{ borderRadius: "60px" }}
                    onClick={() => sendTO()}
                  >
                    <i>
                      <ArrowRightCircleFill />
                    </i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default App;
