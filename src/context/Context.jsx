import React, { Component } from "react";
import items from "../data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  getRoom = slug => {
    let room = this.state.rooms.find(room => room.slug === slug);
    return room;
  };

  formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = {
        ...item.fields,
        id,
        images
      };
      return room;
    });
    return tempItems;
  };

  //getData
  componentDidMount() {
    // let items = this.getData();
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
    console.log(rooms);
  }
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state,getRoom:this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
