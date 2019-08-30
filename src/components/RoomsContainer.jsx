import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context/Context";
import Loading from "./Loading";

const RoomContainer = props => {
  const { loading, sortedRooms, rooms } = props.context;
  console.log("from rooma",props.context);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../context/Context";
// import Loading from "./Loading";

// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello From Rooms Container
//             <RoomsFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsContainer;
