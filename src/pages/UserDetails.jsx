import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Button from "../components/button/Button";
import axios from "axios";
import { manipulateUser } from "../routes/api";
const UserDetails = () => {
  const navigate = useNavigate();
  const { user_type, id } = useParams();
  const [userData, setUserData] = useState();
  const data = useSelector((state) => state.userDetails.data);
  useEffect(() => {
    if (!data.id && id) {
      axios
        .get(`${manipulateUser}/${id}`)
        .then((response) => setUserData(response.data));
    }
    setUserData(data);
  }, [data, id]);
  return (
    <div style={{ margin: "5rem" }}>
      <h2 style={{ padding: "2rem" }}>Details of {user_type}:</h2>
      <table style={{ textAlign: "left" }}>
        <tr>
          <td>ID</td>
          <td>{userData?.id}</td>
        </tr>
        <tr>
          <td>First Name</td>
          <td>{userData?.first_name}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{userData?.last_name}</td>
        </tr>
        <tr>
          <td>Employee Type</td>
          <td>{userData?.user_type}</td>
        </tr>
        <tr>
          <td>Division</td>
          <td>{userData?.division}</td>
        </tr>
        <tr>
          <td>District</td>
          <td>{userData?.district}</td>
        </tr>
      </table>
      <Button onClick={() => navigate(`../edit/${user_type}/${id}`)}>
        Edit
      </Button>
      <div>Share via</div>
      <div>
        <Button onClick={() => {}} color="#11aaff" type={"button"}>
          <a
            href={`https://www.facebook.com/sharer.php?u=pocoegg.com`}
            // href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
          >
            Facebook
          </a>
        </Button>
        <Button onClick={() => {}} color="#11aaff" type={"button"}>
          <a
            href={`https://twitter.com/share?url=pocoegg.com&text=${userData?.first_name}`}
            // href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
