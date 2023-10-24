import React from "react";
import DataTable from "react-data-table-component";

function Table({ column, data }) {
  return (
    <div className="bg-red-500 w-[90%]">
      <DataTable
        key={data._id}
        columns={column}
        data={data}
        highlightOnHover
        pagination
        // customStyles={tableCustomStyles}
      ></DataTable>
    </div>
  );
}

export default Table;
