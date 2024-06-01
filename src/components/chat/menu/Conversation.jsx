import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../store/AccountProvider";
import { setConversation } from "../../../service/api.js";
const Component = styled(Box)`
  display: flex;
  cursor: pointer;
  height: 45px;
  padding: 13px 0;
`;

const Image = styled("img")({
  height: 45,
  width: 45,
  borderRadius: "50%",
  padding: "0 14px",
});

export default function Conversation({ user }) {
  const { setPerson, account } = useContext(AccountContext);
  const getPerson = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Component onClick={getPerson}>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Component>
  );
}
