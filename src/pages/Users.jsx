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

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    axios
      .get(
        `${users}${activeTab?.toLowerCase()}&?page=${currentPage + 1}&limit=5`
      )
      .then((response) => {
        activeTab === "Employee"
          ? dispatch(setEmployeeInformation({ data: response.data.flat() }))
          : dispatch(setAdminInformation({ data: response.data.flat() }));
      })
      .catch((err) => console.error(err));
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage === 1) {
      return;
    }
    axios
      .get(
        `${users}${activeTab?.toLowerCase()}&?page=${currentPage - 1}&limit=5`
      )
      .then((response) => {
        activeTab === "Employee"
          ? dispatch(setEmployeeInformation({ data: response.data.flat() }))
          : dispatch(setAdminInformation({ data: response.data.flat() }));
      })
      .catch((err) => console.error(err));
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (activeTab === "Employee" && employeeData?.length > 1) {
      return;
    } else if (activeTab === "Admin" && adminData?.length > 1) {
      return;
    }
    axios
      .get(`${users}${activeTab?.toLowerCase()}&page=${currentPage}&limit=5`)
      .then((response) => {
        activeTab === "Employee"
          ? dispatch(setEmployeeInformation({ data: response.data.flat() }))
          : dispatch(setAdminInformation({ data: response.data.flat() }));
      });
  }, [activeTab, dispatch]);
  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Add User">
        <UserDetailsForm setClose={setIsOpen} />
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
            rows={adminData.slice((currentPage - 1) * 5, currentPage * 5)}
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
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
            rows={employeeData.slice((currentPage - 1) * 5, currentPage * 5)}
            currentPage={currentPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </Tab>
      </Tabs>
    </>
  );
};

export default Users;
