import React from "react";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

function DatePicker(props) {
  return (
    <MUIDatePicker
      {...props}
      openTo="day"
      views={["day", "month"]}
      renderInput={(params) => <TextField {...params} />}
      inputFormat="dd/MM/yyyy"
    />
  );
}

export default DatePicker;
