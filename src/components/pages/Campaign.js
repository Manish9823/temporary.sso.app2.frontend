import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppData from "./AppData";
import { Grid, Typography } from "@mui/material";

export default function Campaign() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.smsSlice);

  return (
    <Grid pl={1}>
      <Typography fontSize={"2rem"} color={"primary"}>Campaigns</Typography>
      
    </Grid>
  );
}
