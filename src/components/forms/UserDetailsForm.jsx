import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Select from "../select/Select";
import "./userDetailsForm.css";
const UserDetailsForm = ({ initialFormValues }) => {
  const validationSchema = yup.object({
    first_name: yup
      .string("Please enter User's First Name")
      .required("First Name is required"),
    last_name: yup
      .string("Please enter User's Last Name")
      .required("Last Name is required"),
    user_type: yup
      .string("Please enter User Type")
      .required("User Type is required"),
    division: yup.string("Please Choose User's division"),
    district: yup.string("Please Choose User's District"),
  });

  const [selectedDivision, setSelectedDivision] = useState();

  return (
    <div className="card">
      <Formik
        initialValues={
          initialFormValues
            ? initialFormValues
            : {
                first_name: "",
                last_name: "",
                user_type: "",
                division: "",
                district: "",
              }
        }
        validationSchema={validationSchema}
        onSubmit={(values) => {
          let payload = { ...values };
          payload = { ...payload, division: selectedDivision };
          alert(JSON.stringify(payload, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-row">
              <Field
                className="form-control"
                type="text"
                name="first_name"
                placeholder="First Name"
              />
              <Field
                className="form-control"
                type="text"
                name="last_name"
                placeholder="Last Name"
              />
            </div>
            <div className="form-row">
              <label>
                <Field type="radio" name="user_type" value="employee" />
                Employee
              </label>
              <br />
              <label>
                <Field type="radio" name="user_type" value="admin" />
                Admin
              </label>
            </div>
            <div className="form-row">
              {/* <Field
                className="form-control"
                type="text"
                name="division"
                placeholder="Division"
              /> */}
              <Select
                fieldName={"Division"}
                options={["A", "B", "C"]}
                onChange={setSelectedDivision}
              />
            </div>
            <div className="form-row">
              <Field
                className="form-control"
                type="text"
                name="district"
                placeholder="District"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {!initialFormValues ? "Submit" : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserDetailsForm;
