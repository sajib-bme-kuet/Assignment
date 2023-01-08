/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../components/button/Button";
import UserDetailsForm from "../components/forms/UserDetailsForm";
import Modal from "../components/modal/Modal";
import Tab from "../components/tab/Tab";
import Table from "../components/table/Table";
import Tabs from "../components/tabs/Tabs";

import { useEffect, useState } from "react";
import axios from "axios";
import { users } from "../routes/api";
import { useDispatch, useSelector } from "react-redux";

import { setEmployeeInformation } from "../store/employeeInformationSlice";
import { setAdminInformation } from "../store/adminInformationSlice";
const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const dispatch = useDispatch();

  const employeeData = useSelector((state) => state.employeeInformation.data);
  const adminData = useSelector((state) => state.adminInformation.data);

  useEffect(() => {
    if (activeTab === "Employee" && employeeData?.length > 1) {
      return;
    } else if (activeTab === "Admin" && adminData?.length > 1) {
      return;
    }
    axios.get(`${users}${activeTab?.toLowerCase()}`).then((response) => {
      activeTab === "Employee"
        ? dispatch(setEmployeeInformation({ data: response.data.flat() }))
        : dispatch(setAdminInformation({ data: response.data.flat() }));
    });
  }, [activeTab, dispatch]);
  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Add User">
        <UserDetailsForm />
      </Modal>
      <Button onClick={() => setIsOpen(true)}>Add User</Button>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tab label={"Admin"}>
          <Table
            columns={[
              { label: "ID", fieldName: "id" },
              { label: "First Name", fieldName: "first_name" },
              { label: "Last Name", fieldName: "last_name" },
              { label: "User Type", fieldName: "user_type" },
            ]}
            rows={adminData}
          />
        </Tab>
        <Tab label={"Employee"}>
          <Table
            columns={[
              { label: "ID", fieldName: "id" },
              { label: "First Name", fieldName: "first_name" },
              { label: "Last Name", fieldName: "last_name" },
              { label: "User Type", fieldName: "user_type" },
              { label: "Division", fieldName: "division" },
              { label: "District", fieldName: "district" },
            ]}
            rows={employeeData}
          />
        </Tab>
      </Tabs>
    </>
  );
};

export default Users;
