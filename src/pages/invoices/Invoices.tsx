import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { dataRows } from "../../data/DataTeam";
import Header from "../../components/shared/Header";

const Invoices = () => {
  const columnsInvoices = [
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
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{ toolbar: GridToolbar }}
          rows={dataRows}
          // @ts-ignore
          columns={columnsInvoices}
        />
      </Box>
    </>
  );
};

export default Invoices;
