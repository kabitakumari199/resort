import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

const getUnique = (items,value) => {
    return [...new Set(items.map(item=>item[value]))]
}

function RoomsFilter({rooms}){
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUnique(rooms,'type');
  types = ['All',...types];
  types = types.map((item,index)=> {
       return <option value={item} key={index}>{item}</option>
  });

  let people = getUnique(rooms,'capacity');
  people = people.map((item,index) => {
     return(<option key={index} value={item}>{item}</option>)
  });

  return(
   <section className="filter-container">
     <Title Title="Search Room" />
     <form className="filter-form">
     {/* Select type */}
      <div className="form-group">
      <label htmlFor="type">Room Type</label>
      <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
      {types}
      </select>
      </div>
     {/* end select type */}
     {/* Guest */}
     <div className="form-group">
      <label htmlFor="capacity">Guest</label>
      <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
      {people}
      </select>
      </div>
     {/* Guest */}
     {/* Room price */}
     <div className="form-group">
      <label htmlFor="price">Room Price ${price} </label>
      <input type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} className="form-control" onChange={handleChange} />
          
      </div>
     {/* ended price */}

     {/* Room size */}
     <div className="form-group">
      <label htmlFor="size">Roo size</label>
      <div className="size-inputs">
       <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
       <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
      </div>
      </div>
     {/* ended size */}

      {/* Room size */}
      <div className="form-group">
      <div className="single-extra">
      <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast}  onChange={handleChange} />
      <label htmlFor="size">BreakFast</label>
      </div>
      <div className="single-extra">
      <input type="checkbox" name="pets" id="pets" checked={pets}  onChange={handleChange} />
      <label htmlFor="pets">Pets</label>
      </div>
      </div>
     {/* ended size */}
     </form>
   </section>
  );
}

export default RoomsFilter;

