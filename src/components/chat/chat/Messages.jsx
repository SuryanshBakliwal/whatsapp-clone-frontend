import { Box, styled } from "@mui/material";
import { useRef } from "react";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { AccountContext } from "../../../store/AccountProvider";
import { getMessage, newMessage } from "../../../service/api";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-size: 50%;
`;

const Component = styled(Box)`
  overflow-y: scroll;
  height: 75vh;
`;
const Container = styled(Box)`
  padding: 5px 40px;
`;

export default function Messages({ person, conversation }) {
  const { account, socket } = useContext(AccountContext);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMsgFlag, setFlag] = useState(false);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    // console.log(code);
    if (code === 13) {
      let message = [];
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: text,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      socket.current.emit("sendMessage", message);
      let res = await newMessage(message);
      console.log(res);
      setText("");
      setImage("");
      setFile("");
      setFlag((prev) => !prev);
    }
  };

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({ ...data, createAt: Date.now() });
    });
  });

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [conversation._id, person._id, newMsgFlag]);

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => {
            return (
              <Container ref={scrollRef}>
                <Message message={message} />
              </Container>
            );
          })}
      </Component>
      <Footer
        sendText={sendText}
        setText={setText}
        text={text}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
}
