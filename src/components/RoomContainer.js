import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../context';

function RoomContainer({context}){
  const {sortedRooms,rooms} = context;
  return (
    <>
      <RoomsFilter rooms ={rooms} />
      <RoomsList rooms ={sortedRooms}/>
    </>
  )
}

export default withRoomConsumer(RoomContainer);

