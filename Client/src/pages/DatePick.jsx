import React from "react";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";

function DatePick() {
  const [options, setOptions] =
    React.useState <
    CheckInAndOutReturnAbles >
    {
      start: null,
      end: null,
      guests: 1,
    };

  return (
    <>
      <DatePicker
        label="Check In"
        openTo="day"
        views={["day", "month"]}
        value={options.start}
        minDate={new Date()}
        inputFormat="dd/MM/yyyy"
        onChange={(newValue) => setOptions({ ...options, start: newValue })}
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
}

export default DatePick;
