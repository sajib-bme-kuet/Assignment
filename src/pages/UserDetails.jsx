import React from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../components/button/Button";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <h5>Details of Employee:</h5>
      <table>
        <tr>
          <td>ID</td>
          <td>value</td>
        </tr>
        <tr>
          <td>First Name</td>
          <td>value</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>value</td>
        </tr>
        <tr>
          <td>Employee Type</td>
          <td>value</td>
        </tr>
        <tr>
          <td>Division</td>
          <td>value</td>
        </tr>
        <tr>
          <td>District</td>
          <td>value</td>
        </tr>
      </table>
      <Button onClick={() => navigate(`../edit/${id}`)}>Edit</Button>
      <div>Share via</div>
    </div>
  );
};

export default UserDetails;
