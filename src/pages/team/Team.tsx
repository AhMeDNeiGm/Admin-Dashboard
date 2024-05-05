import React from "react";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

import Header from "../../components/shared/Header";
import { dataRows } from "../../data/DataTeam";

const Team = () => {
  const theme = useTheme();
  const dataColumns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
          >
            <Box
              sx={{
                p: "5px",
                width: "99px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor:
                  access === "Admin"
                    ? theme.palette.primary.dark
                    : access === "Manager"
                    ? theme.palette.secondary.dark
                    : theme.palette.success.dark,
              }}
            >
              {access === "Admin" && (
                <AdminPanelSettingsOutlined
                  sx={{ color: "#fff" }}
                  fontSize="small"
                />
              )}
              {access === "Manager" && (
                <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}
              {access === "User" && (
                <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
              )}

              <Typography sx={{ fontSize: "14px", color: "#fff" }}>
                {access}
              </Typography>
            </Box>
          </Stack>
        );
      },
    },
  ];
  return (
    <>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
        <DataGrid rows={dataRows} columns={dataColumns} autoHeight />
      </Box>
    </>
  );
};

export default Team;
