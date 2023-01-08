import React from "react";
import UserDetailsForm from "../components/forms/UserDetailsForm";
import { useSelector } from "react-redux";
const UserDetailsEdit = () => {
  const userData = useSelector((state) => state.userDetails.data);

  return (
    <div>
      <h4> Edit User: </h4>
      <UserDetailsForm
        initialFormValues={{
          first_name: userData.first_name,
          last_name: userData.last_name,
          user_type: userData.user_type,
          division: userData.division,
          district: userData.district,
        }}
      />
    </div>
  );
};

export default UserDetailsEdit;
