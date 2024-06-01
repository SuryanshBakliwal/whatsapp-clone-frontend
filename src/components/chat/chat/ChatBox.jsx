import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../../../store/AccountProvider";
import { getConversation } from "../../../service/api";

export default function ChatBox() {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({})
  useEffect(() => {
    const getConverstionDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConverstionDetails();
  }, [account.sub, person.sub]);
  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} import conversation={conversation}/>
    </Box>
  );
}
