import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { dataRows } from "./../../data/DataTeam";

const Contacts = () => {
  const columnsContacts = [
    { field: "id", headerName: "ID", width: 33 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 44,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
    },
  ];
  return (
    <>
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          rows={dataRows}
          // @ts-ignore
          columns={columnsContacts}
        />
      </Box>
    </>
  );
};

export default Contacts;
