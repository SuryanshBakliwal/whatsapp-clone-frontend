import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { uploadFile } from "../../../service/api";

const Component = styled(Box)`
  height: 50px;
  background: #ea80fc;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #d500f9;
  }
`;

const Search = styled(Box)`
  background-color: #e1bee7;
  border-radius: 18px;
  width: calc(94% - 100px);
`;
const StyledInput = styled(InputBase)`
  padding: 20px;
  height: 15px;
  width: 100%;
  padding-left: 25px;
  font-size: 15px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;

export default function Footer({
  sendText,
  setText,
  text,
  file,
  setFile,
  setImage,
}) {
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setText(e.target.files[0].name);
  };
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const res = await uploadFile(data);
        setImage(res.data);
      }
    };
    getImage();
  }, [file]);
  return (
    <Component>
      <EmojiEmotionsOutlined />
      <label htmlFor="inputFile">
        <ClipIcon />
      </label>
      <input
        id="inputFile"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <StyledInput
          placeholder="Type messages"
          onChange={(e) => setText(e.target.value)}
          onKeyUp={(e) => sendText(e)}
          value={text}
        />
      </Search>
      <Mic />
    </Component>
  );
}
