import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context/Context";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: props.match.params.slug,
      defaultBcg,
      room: "",
      error: false
    };
  }
  componentDidMount() {
    const { getRoom } = this.context;
    console.log(getRoom);
    console.log(this.state.slug);
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>No Such Room could be found</h3>
          <Link to="/room" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    this.setState({ room });
  }
  static contextType = RoomContext;
  render() {
    return <div>{}</div>;
  }
}

export default SingleRoom;
