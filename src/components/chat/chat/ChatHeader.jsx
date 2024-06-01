import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../store/AccountProvider";
import { MoreVert, Search } from "@mui/icons-material";

const Header = styled(Box)`
  display: flex;
  height: 44px;
  background-color: #ce93d8;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin: 0 0 0 12px !important;
`;
const Status = styled(Typography)`
  margin: 0 0 0 12px !important;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 22px;
    color: #000;
  }
`;

export default function ChatHeader({ person }) {
  const { activeUsers } = useContext(AccountContext);

  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "online"
            : "offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
}
