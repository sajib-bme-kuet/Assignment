import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";
import Tab from "../components/tab/Tab";
import Tabs from "../components/tabs/Tabs";

import { useState } from "react";
const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add User</Button>
      <Tabs>
        <Tab label={"Employee"}>Employee</Tab>
        <Tab label={"Admin"}>Admin</Tab>
      </Tabs>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Add User">
        Hello
      </Modal>
    </>
  );
};

export default Users;
