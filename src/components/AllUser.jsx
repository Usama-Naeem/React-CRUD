import { useEffect, useState } from "react";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import { getUser } from "../services/api";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUser();
    setUsers(response.data);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Contact</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { 
        users.map(user => (
          <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.contact}</TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    </Table>
  );
};

export default AllUser;
