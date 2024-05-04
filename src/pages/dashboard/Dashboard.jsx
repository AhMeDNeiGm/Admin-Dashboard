import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import { Box, Button, Stack } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/shared/Header";

const Dashboard = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
};

export default Dashboard;
