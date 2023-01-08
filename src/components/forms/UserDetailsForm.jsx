/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { City, State } from "country-state-city";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { manipulateUser } from "../../routes/api";
import Select from "../select/Select";
import "./userDetailsForm.css";

import { useNavigate } from "react-router";
import { setAdminInformation } from "../../store/adminInformationSlice";
import { setEmployeeInformation } from "../../store/employeeInformationSlice";

export default function UserDetailsForm({ initialFormValues, setClose }) {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [districts, setDistricts] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
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
      let payload = { ...values };
      payload = {
        ...payload,
        district: selectedDistrict?.name,
        division: selectedDivision?.name,
      };

      initialFormValues?.id
        ? axios
            .put(
              `${manipulateUser}/${initialFormValues.id}`,
              JSON.stringify(payload, null, 2),
              { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
              response.data.user_type === "Employee"
                ? dispatch(setEmployeeInformation({ data: response.data }))
                : dispatch(setAdminInformation({ data: response.data }));

              formik.resetForm();
              alert("Updated Successfully!");
              navigate("/");
            })
            .catch((err) => console.error(err))
        : axios
            .post(manipulateUser, JSON.stringify(payload, null, 2), {
              headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
              response.data.user_type === "Employee"
                ? setEmployeeInformation({ data: response.data })
                : setAdminInformation({ data: response.data });

              formik.resetForm();
              setClose(!true);
              alert("Saved Successfully!");
              navigate("/");
            })
            .catch((err) => console.error(err));
    },
  });

  const divisionNames = State.getStatesOfCountry("BD")
    .filter((state) => state.name.includes("Division"))
    .map((state) => state.name.split(" Division")[0]);

  const divisions = State.getStatesOfCountry("BD")
    .filter((state) => divisionNames.includes(state.name.split(" ")[0]))
    .filter((division) => !division.name.includes("Division"));

  useEffect(() => {
    if (!selectedDivision) {
      return;
    }
    setDistricts(
      City.getCitiesOfState(
        selectedDivision?.countryCode,
        selectedDivision?.isoCode
      )
    );
  }, [selectedDivision]);

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
              className="textField"
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div>{formik.errors.first_name}</div>
            ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="last_name">Last Name</label>
            <br></br>
            <input
              id="last_name"
              name="last_name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
              className="textField"
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div>{formik.errors.last_name}</div>
            ) : null}
          </div>

          <div className="form-row">
            <label htmlFor="user_type">User Type</label>
            <br></br>
            <input
              name="user_type"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.user_type === "Employee"}
              value="Employee"
              className="textField"
            />
            <label>Employee</label>
            <input
              name="user_type"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.user_type === "Admin"}
              value="Admin"
              className="textField"
            />
            <label>Admin</label>
            {formik.touched.user_type && formik.errors.user_type ? (
              <div>{formik.errors.user_type}</div>
            ) : null}
          </div>
          {formik.values.user_type === "Employee" ? (
            <>
              <div className="form-row">
                <label htmlFor="division">Divison</label>
                <br></br>
                <Select
                  label={"Division"}
                  name="division"
                  options={divisions}
                  onChange={setSelectedDivision}
                  initialValue={formik.values?.division}
                />
                {formik.touched.division && formik.errors.division ? (
                  <div>{formik.errors.division}</div>
                ) : null}
              </div>
              <div className="form-row">
                <label htmlFor="district">District</label>
                <br></br>
                <Select
                  label={"District"}
                  name="district"
                  options={districts}
                  onChange={setSelectedDistrict}
                  initialValue={formik.values?.district}
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
