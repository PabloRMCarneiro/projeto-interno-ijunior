import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { blue } from "@mui/material/colors";

const styles = {
  alert: {
    width: "100%",
    marginBottom: "15px",
    fontSize: "12px",
    borderRadius: "10px",
  },
};
export default function AlertModal(props: any) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error" style={styles.alert}>
        {props.message}
      </Alert>
    </Stack>
  );
}
