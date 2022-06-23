import { useState, React } from "react";
import { http } from "../utils/axiosConfig";
import { useSearchParams } from "react-router-dom";

function BookingForm() {
  const params = new URLSearchParams(window.location.search);
  // for (const param of params) {
  //   console.log(param); // in a single iteration of params we get one key value pair
  // }
  const data = params.get("data");
  const [formData, setFormData] = useState({ room: data });

  const submitForm = (e) => {
    e.preventDefault();
    const data = JSON.stringify(formData);
    console.log(formData);
    http.post(`bookings/add`, data);
  };

  const setFormField = (e) => {
    const fieldData = {
      ...formData,
    };
    fieldData[e.target.name] = e.target.value;
    setFormData(fieldData);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          onChange={setFormField}
          name="email"
          placeholder="email"
        />
        <input
          type="text"
          onChange={setFormField}
          name="phone"
          placeholder="phone"
        />
        <input
          type="text"
          onChange={setFormField}
          name="first_name"
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={setFormField}
          name="last_name"
          placeholder="Last Name"
        />
        <input
          type="text"
          onChange={setFormField}
          name="payMethod"
          placeholder="payMethod"
        />
        <input type="hidden" value={data} name="room" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
