import axios from "axios";
import React from "react";
import Room from "../components/Room";

// this componenet list all the ROOMS
const List = () => {
  // rooms tells what all rooms we have
  const [rooms, setRooms] = React.useState([]);
  // usEffect runs after all the rendring and calculation BUT useLayoutEffect runs before all the calculations and rendering
  //   So , we use useLayoutEffect for layout purpose mainly
  React.useLayoutEffect(function () {
    const getRooms = async function () {
      const request = axios.get("rooms/all"); // request all the rooms using axios
      const response = (await request).data; // response wait's for request to get it's result

      setRooms(response);
    };

    getRooms();
  }, []);

  return (
    <div className="w-screen h-auto pt-2 px-4 flex justify-center items-center md:flex-row flex-col gap-4">
      {rooms.map((room) => (
        <Room key={Math.random() + room.type} room={room} />
      ))}
    </div>
  );
};

export default List;
