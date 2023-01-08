import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./userDetailsForm.css";
import Select from "../select/Select";
import { State, City } from "country-state-city";
export default function UserDetailsForm({ initialFormValues }) {
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

  const formik = useFormik({
    initialValues: initialFormValues
      ? initialFormValues
      : {
          first_name: "",
          last_name: "",
          user_type: "",
          division: "",
          district: "",
        },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-row">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div>{formik.errors.first_name}</div>
            ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div>{formik.errors.last_name}</div>
            ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="user_type">User Type</label>
            <input
              name="user_type"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.user_type === "Employee"}
              value="Employee"
            />
            <label>Employee</label>
            <input
              name="user_type"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.user_type === "Admin"}
              value="Admin"
            />
            <lable>Admin</lable>
            {formik.touched.user_type && formik.errors.user_type ? (
              <div>{formik.errors.user_type}</div>
            ) : null}
          </div>
          {formik.values.user_type === "Employee" ? (
            <>
              <div className="form-row">
                <label htmlFor="division">Divison</label>
                <Select
                  label={"Division"}
                  name="division"
                  options={[1, 2, 3]}
                  formik={formik}
                />
                {formik.touched.division && formik.errors.division ? (
                  <div>{formik.errors.division}</div>
                ) : null}
              </div>
              <div className="form-row">
                <label htmlFor="district">District</label>
                <Select
                  label={"District"}
                  name="district"
                  options={[1, 2, 3]}
                  formik={formik}
                />
                {formik.touched.district && formik.errors.district ? (
                  <div>{formik.errors.district}</div>
                ) : null}
              </div>
            </>
          ) : null}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
