import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { formatDate, downloadMedia } from "../../../utils/common-utils";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { AccountContext } from "../../../store/AccountProvider";
import { PDFIcon } from "../../../constants/data";
const Own = styled(Box)`
  background: #E040FB;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  max-width: 60%;
  border-radius: 10px;
  word-break: break-word;
`;
const Wrapper = styled(Box)`
  background: #ffffff;
  margin-right: auto;
  padding: 5px;
  width: fit-content;
  max-width: 60%;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;
const Time = styled(Typography)`
  font-size: 10px;
  color: #616161;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;

export default function Message({ message }) {
  const { account } = useContext(AccountContext);





  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message.type === "file" ? (
            <ImageMessages message={message} />
          ) : (
            <TextMessages message={message} />
          )}
        </Own>
      ) : (
        <Wrapper>
          {message.type === "file" ? (
            <ImageMessages message={message} />
          ) : (
            <TextMessages message={message} />
          )}
        </Wrapper>
      )}
    </>
  );
}

const TextMessages = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};
const ImageMessages = ({ message }) => {
  return (
    <>
      <Box style={{ position: "relative" }}>
        {message?.text?.includes(".pdf") ? (
          <Box style={{ display: "flex" }}>
            <img src={PDFIcon} alt="pdf" style={{ width: "70px" }} />
            <Typography style={{ fontSize: "14px" }}>
              {message.text.split("/").pop()}
            </Typography>
          </Box>
        ) : (
          <img
            style={{ width: "300px", height: "100%", objectFit: "cover" }}
            src={message.text}
            alt=""
          />
        )}
        <Time
          style={{ position: "absolute", bottom: 0, right: 0, zIndex: 100 }}
        >
          <FileDownloadIcon
            onClick={(e) => downloadMedia(e, message.text)}
            style={{
              color: "black",
              fontSize: "small",
              marginRight: 10,
              border: "1px solid black",
              borderRadius: "50%",
            }}
          />
          {formatDate(message.createdAt)}
        </Time>
      </Box>
    </>
  );
};
