import React, { useEffect, useState } from "react";
import { apiUrl } from "../App";
import axios from "axios";

// Components :
import Table from "./Table";
import NavBar from "./NavBar";

// Toast :
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [docketDetails, setDocketDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getDocketDetails = async () => {
    try {
      setIsLoading(true);
      const req = {
        action: "getDocket",
      };
      const res = await axios.post(`${apiUrl}/docketDetails`, req);
      console.log("res: ", res);
      if (res.status == 200) {
        setDocketDetails(res.data.result);
        console.log("After working");
        toast(res.data.message, {
          icon: (
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
          ),
        });
      }
      setIsLoading(false);
    } catch (error) {
      if (error) {
        console.log("error: ", error);
        toast(error.data.message, {
          icon: (
            <FontAwesomeIcon icon={faTimesCircle} style={{ color: "red" }} />
          ),
        });
      }
    }
  };

  useEffect(() => {
    getDocketDetails();
  }, []);

  const column = [
    {
      name: <h1>S.No</h1>,
      width: "60px",
      cell: (row, index) => <div className="text-[#6D6D6D]">{index + 1}</div>,
    },
    {
      name: <h1>Name</h1>,
      width: "auto",
      cell: (row) => <div className="text-[#6D6D6D]">{row.name}</div>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <h1>Start Time</h1>,
      width: "auto",
      cell: (row, index) => (
        <div className="text-[#6D6D6D]">{row.startTime}</div>
      ),
      selector: (row) => row.startTime,
      sortable: true,
    },
    {
      name: <h1>End Time</h1>,
      width: "auto",
      cell: (row) => <div className="text-[#6D6D6D]">{row.endTime}</div>,
      selector: (row) => row.endTime,
      sortable: true,
    },
    {
      name: <h1>No of hours worked</h1>,
      width: "auto",
      cell: (row) => (
        <div className="text-[#6D6D6D]">{row.noOfHoursWorked}</div>
      ),
      selector: (row) => row.noOfHoursWorked,
      sortable: true,
    },
    {
      name: <h1>Rate per hour</h1>,
      width: "auto",
      cell: (row) => <div className="text-[#6D6D6D]">{row.ratePerHour}</div>,
      selector: (row) => row.ratePerHour,
      sortable: true,
    },
    {
      name: <h1>Rate per hour</h1>,
      width: "auto",
      cell: (row) => <div className="text-[#6D6D6D]">{row.supplierName}</div>,
      selector: (row) => row.supplierName,
      sortable: true,
    },
    {
      name: <h1>Rate per hour</h1>,
      width: "auto",
      cell: (row) => <div className="text-[#6D6D6D]">{row.poNumber}</div>,
      selector: (row) => row.poNumber,
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="flex flex-col">
        <NavBar />
        {isLoading ? (
          <div className="pt-4 pl-20">Loading...</div>
        ) : (
          <div className="flex justify-center items-center">
            <Table column={column} data={docketDetails} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
