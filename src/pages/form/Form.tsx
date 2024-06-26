import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Avatar,
  Button,
  MenuItem,
  Snackbar,
  Stack,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { useDropzone } from "react-dropzone";

import Header from "../../components/shared/Header";
import { UserData } from "../../interfaces/data/data";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const [avatar, setAvatar] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    handleClick();
    console.log("Done Data");
  };

  const accessUsers = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  return (
    <>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Stack
            sx={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Avatar"
              src={avatar}
              sx={{ width: 210, height: 210 }}
            />
            <Box {...getRootProps()}>
              <input {...getInputProps()} />
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "capitalize" }}
              >
                Choose Profile Picture
              </Button>
            </Box>
          </Stack>
          <Stack direction={"column"} sx={{ gap: 2, flex: 1 }}>
            <TextField
              {...register("firstName", { required: true, minLength: 3 })}
              helperText={
                errors.firstName
                  ? "This field is required & min 3 character"
                  : null
              }
              error={Boolean(errors.firstName)}
              sx={{ flex: 1 }}
              label="First Name"
              variant="outlined"
            />
            <TextField
              {...register("lastName", { required: true, minLength: 3 })}
              helperText={
                errors.lastName
                  ? "This field is required & min 3 character"
                  : null
              }
              error={Boolean(errors.lastName)}
              sx={{ flex: 1 }}
              label="Last Name"
              variant="outlined"
            />
            <TextField
              error={Boolean(errors.email)}
              helperText={
                errors.email ? "Please provide a valid email address" : null
              }
              {...register("email", { required: true, pattern: regEmail })}
              sx={{ flex: 1 }}
              label="Email"
              variant="outlined"
            />
            <TextField
              error={Boolean(errors.ContactNumber)}
              helperText={
                errors.ContactNumber
                  ? "Please provide a valid Phone number"
                  : null
              }
              {...register("ContactNumber", {
                required: true,
                pattern: phoneRegExp,
              })}
              sx={{ flex: 1 }}
              label="Phone"
              variant="outlined"
            />
          </Stack>
        </Box>

        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            sx={{ flex: 1 }}
            label="City"
            variant="outlined"
            {...register("city")}
          />
          <TextField
            sx={{ flex: 1 }}
            label="Address"
            variant="outlined"
            {...register("address")}
          />
        </Stack>
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            sx={{ flex: 1 }}
            label="Age"
            variant="outlined"
            {...register("age")}
          />
          <TextField
            sx={{ flex: 1 }}
            label="Zip Code"
            variant="outlined"
            {...register("zipCode")}
          />
          <TextField
            sx={{ flex: 1 }}
            id="outlined-select-currency"
            select
            label="Access"
            defaultValue="User"
            helperText="Select Access Permissions"
            {...register("access")}
          >
            {accessUsers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            type="submit"
          >
            Create New User
          </Button>

          {/* Toast */}
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
};

export default Form;
