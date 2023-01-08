import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";
import Tab from "../components/tab/Tab";
import Tabs from "../components/tabs/Tabs";

import { useState } from "react";
import UserAddForm from "../components/forms/UserAddForm";
import Table from "../components/table/Table";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Add User">
        <UserAddForm />
      </Modal>
      <Button onClick={() => setIsOpen(true)}>Add User</Button>
      <Tabs>
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
              // { label: "Division", fieldName: "division" },
              // { label: "District", fieldName: "istrict" },
            ]}
            rows={[{ id: 1, name: "Admin" }]}
          />
        </Tab>
      </Tabs>
    </>
  );
};

export default Users;
