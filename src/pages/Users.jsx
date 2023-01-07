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
        <Tab label={"Employee"}>Employee</Tab>
        <Tab label={"Admin"}>Admin</Tab>
      </Tabs>
      <Table
        columns={[{ label: "ID", fieldName: "id" }]}
        rows={[{ id: 1, name: "Sajib" }]}
      />
    </>
  );
};

export default Users;
