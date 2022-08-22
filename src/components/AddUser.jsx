import styled from "@emotion/styled";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../services/api";

const Container = styled(FormGroup)`
  width: 35%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 20px;
  }
`;

const AddUser = () => {
  const initialValue = {
    name: "",
    username: "",
    email: "",
    contact: "",
  };

  const [user, setUser] = useState(initialValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user)
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Add User</h2>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Contact</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="contact" />
      </FormControl>
      <FormControl>
        <Button onClick={() => addUserDetails()}>Add User</Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
