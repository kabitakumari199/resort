import React, { Component } from 'react';
import { RoomContext } from '../context';
//import Loading from '../loading';
import Title from './Title';
import Room from './Room';


 class FeatureRooms extends Component  {
      static contextType = RoomContext;
      render(){
        let {featuredRooms:rooms} = this.context;
        rooms = rooms.map(room =>{
           return  <Room key={room.id} room={room} />
        });
        console.log(rooms);
  
        return(
          <section className="featured-rooms">
            <Title Title="Featured Rooms"/>
            
            <div className="featured-rooms-center">
             {rooms}
            </div>
           
            </section>
        )
      }
}
export default FeatureRooms;