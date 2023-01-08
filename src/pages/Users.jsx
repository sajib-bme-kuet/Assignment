import Button from "../components/button/Button";
import UserDetailsForm from "../components/forms/UserDetailsForm";
import Modal from "../components/modal/Modal";
import Tab from "../components/tab/Tab";
import Table from "../components/table/Table";
import Tabs from "../components/tabs/Tabs";

import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    axios.get();
  }, [activeTab]);
  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Add User">
        <UserDetailsForm />
      </Modal>
      <Button onClick={() => setIsOpen(true)}>Add User</Button>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tab label={"Employee"}>
          <Table
            columns={[
              { label: "ID", fieldName: "id" },
              { label: "First Name", fieldName: "first_name" },
              { label: "Last Name", fieldName: "last_name" },
              { label: "User Type", fieldName: "user_type" },
              { label: "Division", fieldName: "division" },
              { label: "District", fieldName: "istrict" },
            ]}
            rows={[{ id: 1, name: "Employee" }]}
          />
        </Tab>
        <Tab label={"Admin"}>
          <Table
            columns={[
              { label: "ID", fieldName: "id" },
              { label: "First Name", fieldName: "first_name" },
              { label: "Last Name", fieldName: "last_name" },
              { label: "User Type", fieldName: "user_type" },
            ]}
            rows={[{ id: 1, name: "Admin" }]}
          />
        </Tab>
      </Tabs>
    </>
  );
};

export default Users;
