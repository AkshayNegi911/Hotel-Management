import React, { useState, useLayoutEffect } from "react";
import Slider from "../components/Slider";
// import BasicDateRangePicker from "../components/CheckInAndOut.jsx";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import DatePickerUI from "../components/DatePickerUI";

export default function Home() {
  const [duration, setDuration] = useState({
    start: null,
    end: null,
    guests: 1,
  });
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 95,
  });
  const [slideIndex, setSlideIndex] = React.useState(0);

  const convertobjToUrlStirng = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return keys
      .map((key, idx) => {
        return `${key}=${values[idx]}`;
      })
      .join(`&`);
  };

  // The debounce() function forces a function to wait a certain amount of time before running again
  // it takes 2 arguments :-
  // 1st callBack()(i.e the fun() whose execution it delay's)
  // 2nd delay time(amount of delay in miliseconds)
  const debounce = (cb, delay = 1000) => {
    let timer;
    // ...args will destructure the callBack() arguments
    return (...args) => {
      clearInterval(timer); //The clearInterval() method clears a timer set by the setTimeout() method.
      timer = setTimeout(() => cb(...args), delay);
      //1.The setTimeout() will call cb() after 'delay' miliseconds
      //2.We use the clearTimeout() method to prevent the serTimeout() from starting.
    };
  };

  // we call debounce in setDimensions . so that whenever we
  // change images dimensions we wait for few seconds and then change it
  // so that even if anyone again changes the size in between we don't need
  // to resize our image.
  const setDimensions = debounce(() =>
    setOptions({
      // this is the call-Back fun() we pass to debounce
      width: window.innerWidth,
      height: window.innerHeight - 95,
    })
  );

  // 1.useLayoutEffect is the useEffect we use for layout
  // 2.useLayoutEffect's performence is poorer then useEffect
  useLayoutEffect(() => {
    const getImages = async function () {
      // we fetch the content of "http://localhost:5000/api/decoration/images"
      const request = await fetch(
        "http://localhost:5000/api/decoration/images"
      );
      const response = await request.json(); // we convert it to Json formet

      return response;
    };

    getImages().then((slider_images) => {
      console.log(slider_images);
      setImages(slider_images);
    });
  }, []);

  // addEventListener calls setDimensions() whenever
  // "resize(i.e resizing of image)" occurs
  window.addEventListener("resize", setDimensions);

  return (
    <div className="relative w-screen h-[87.5vh] overflow-hidden ">
      <div className="absolute z-0 top-0 left-0 right-0 bottom-0">
        <Slider
          setSlideIndex={setSlideIndex}
          {...options}
          images={images.map((img) => img.url)}
        />
      </div>
      <div className="absolute z-10 w-screen flex justify-center items-center h-full pointer-events-none bg-[rgba(0,0,0,0.4)] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="w-max text-white h-auto flex justify-center items-center flex-col">
          <span className="font-bold uppercase mb-3 text-6xl">
            {images[slideIndex]?.heading}
          </span>
          <span className="text-lg font-medium">
            {images[slideIndex]?.subheading}
          </span>
        </div>
      </div>
      <div className="absolute z-10  ">
        <div className=" bg-white flex gap-4">
          <DatePickerUI
            cb={(duration) => {
              console.log(convertobjToUrlStirng(duration));
            }}
          />
        </div>
      </div>
    </div>
  );
}
