import React, { useState } from "react";
import DatePicker from "./DatePicker";

function DatePickerUI({ cb }) {
  const [duration, setDuration] = useState({
    start: new Date(),
    end: null,
    guest: 1,
  });
  return (
    <div>
      <div>
        <DatePicker
          label="Check In"
          value={duration.start}
          minDate={new Date()}
          onChange={(newValue) => setDuration({ ...duration, start: newValue })}
          className="z-40"
        />
      </div>
      <div>
        <DatePicker
          label="Check In"
          value={duration.end || duration.start}
          minDate={duration.start}
          onChange={(newValue) => setDuration({ ...duration, end: newValue })}
          className="z-40"
        />
      </div>
      <button onClick={() => cb(duration)}> CHECK AVAILIBILITY</button>
    </div>
  );
}

export default DatePickerUI;
