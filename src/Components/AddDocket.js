import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../App";
import * as Yup from "yup";
import axios from "axios";

// Components :
import NavBar from "./NavBar";

// Toast :
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

function AddDocket() {
  const navigate = useNavigate();
  const [poDetails, setPoDetails] = useState();
  const [selectedPoNumber, setPoNumber] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const docketDetails = {
    name: "",
    startTime: "",
    endTime: "",
    noOfHoursWorked: "",
    ratePerHour: "",
    supplierName: "",
    poNumber: "",
  };

  // ValidationSchema
  const docketSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Name is required"),
    startTime: Yup.string().required("Start Time is required"),
    endTime: Yup.string().required("End Time is required"),
    noOfHoursWorked: Yup.string().required("No of Hours Worked is required"),
    ratePerHour: Yup.string().required("Rate Per Hour is required"),
  });

  // Get Supplier and PO Details:
  const getPoDetails = async (setPoDetails) => {
    try {
      const res = await axios.post(`${apiUrl}/getPoDetails`);
      if (res.status == 200) {
        setPoDetails(res.data.result);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getPoDetails(setPoDetails);
  }, []);

  const poDetailsOption = [{ label: "", value: "", supplier: "" }];
  const supplierOption = [{ label: "", value: "", poNumber: "" }];
  const uniquePoNumber = new Set();
  const uniqueSupplier = new Set();

  if (poDetails && poDetails.length > 0) {
    poDetails.forEach((e) => {
      if (!uniquePoNumber.has(e.poNumber)) {
        uniquePoNumber.add(e.poNumber);
        let object = {
          label: `${e.poNumber} - ${e.description}`,
          value: e.poNumber,
          supplier: e.supplier,
        };
        poDetailsOption.push(object);
      }
      if (!uniqueSupplier.has(e.supplier)) {
        uniqueSupplier.add(e.supplier);
        let object = {
          label: e.supplier,
          value: e.supplier,
          poNumber: e.poNumber,
        };
        supplierOption.push(object);
      }
    });
  }

  // Filter Po Number based on Supplier :
  const filteredPoDetails = poDetailsOption.filter(
    (option) => option.supplier === selectedSupplier
  );

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      console.log("Form values:", values);
      values.action = "addDocket";
      values.poNumber = selectedPoNumber;
      values.supplierName = selectedSupplier;
      const res = await axios.post(`${apiUrl}/docketDetails`, values);
      if (res.status == 201) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("error: ", error);
      toast(error.response.data.message, {
        icon: <FontAwesomeIcon icon={faTimesCircle} style={{ color: "red" }} />,
      });
    }
  };
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex justify-center items-centers">
        <div className="bg-[#F3F4F6] mt-5 ml-5 w-[55em] p-5 rounded-lg">
          <Formik
            initialValues={docketDetails}
            validationSchema={docketSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2 pl-2"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-[12px] text-red-500 pt-2"
                />
              </div>

              <div className="flex flex-col pt-3">
                <label htmlFor="startTime">Start Time</label>
                <Field
                  type="text"
                  id="startTime"
                  name="startTime"
                  className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2 pl-2"
                />
                <ErrorMessage
                  name="startTime"
                  component="div"
                  className="text-[12px] text-red-500 pt-2"
                />
              </div>

              <div className="flex flex-col pt-3">
                <label htmlFor="endTime">End Time</label>
                <Field
                  type="text"
                  id="endTime"
                  name="endTime"
                  className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2 pl-2"
                />
                <ErrorMessage
                  name="endTime"
                  component="div"
                  className="text-[12px] text-red-500 pt-2"
                />
              </div>

              <div className="flex flex-col pt-3">
                <label htmlFor="noOfHoursWorked">No of Hours Worked</label>
                <Field
                  type="text"
                  id="noOfHoursWorked"
                  name="noOfHoursWorked"
                  className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2 pl-2"
                />
                <ErrorMessage
                  name="noOfHoursWorked"
                  component="div"
                  className="text-[12px] text-red-500 pt-2"
                />
              </div>

              <div className="flex flex-col pt-3">
                <label htmlFor="ratePerHour">Rate Per Hour</label>
                <Field
                  type="text"
                  id="ratePerHour"
                  name="ratePerHour"
                  className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2 pl-2 text-red-500"
                />
                <ErrorMessage
                  name="ratePerHour"
                  component="div"
                  className="text-[12px] text-red-500 pt-2"
                />
              </div>

              <div className="flex flex-col pt-3">
                <label htmlFor="supplierName">Supplier Name</label>
                <select
                  id="supplierName"
                  name="supplierName"
                  className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2 pl-2"
                  onChange={(e) => setSelectedSupplier(e.target.value)}
                >
                  {/* <option value="" disabled>
                  Select an option
                </option> */}
                  {supplierOption
                    .filter((option) => option.value !== undefined)
                    .map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
                <ErrorMessage
                  name="supplierName"
                  component="div"
                  className="text-[12px] text-red-500 pt-2"
                />
              </div>

              <div className="flex flex-col pt-3">
                <label htmlFor="poNumber">P.O Number</label>
                <select
                  id="poNumber"
                  name="poNumber"
                  className="bg-[#FFFFFF] h-[2em] rounded-sm mt-2 pl-2"
                  onChange={(e) => setPoNumber(e.target.value)}
                >
                  {filteredPoDetails.length > 1
                    ? filteredPoDetails
                        .filter((option) => option.value !== undefined)
                        .map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                    : poDetailsOption
                        .filter((option) => option.value !== undefined)
                        .map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                </select>
                <ErrorMessage
                  name="poNumber"
                  component="div"
                  className="text-[12px] text-red-500 pt-2"
                />
              </div>

              <button
                type="submit"
                className="bg-[#16174F] text-[#FFFFFF] px-4 py-2 rounded-[5px] mt-5"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AddDocket;
