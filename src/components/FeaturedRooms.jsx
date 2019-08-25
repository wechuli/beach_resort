import React, { Component } from "react";
import { RoomConsumer,RoomProvider,RoomContext } from "../context/Context";
class FeaturedRooms extends Component {
    static contextType =RoomContext;
  render() {
      const value = this.context;
      console.log(value);
    return (
      <div>
        <p>Hello from featured rooms</p>
      </div>
    );
  }
}

export default FeaturedRooms;
