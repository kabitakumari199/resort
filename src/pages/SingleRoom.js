import React, { Component } from 'react';
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';

 class SingleRoom extends Component  {
   
      constructor(props){
        super(props);
        this.state = {
          slug:this.props.match.params.slug,
          defaultBcg
        }

      }
      static contextType = RoomContext;
      render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        if(!room){
          return(<div className="error">
          <h3>No Such a room Found ! try again !</h3>
          <Link to="/rooms" className="btn-primary">
           Back to room
          </Link>
          </div>
          );
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        return(
          <React.Fragment>
          <Hero hero='roomsHero'>
          <Banner title={`${name} room`}>
          <Link to='/rooms' className="btn-primary">
           Back to room
          </Link>
          </Banner>
          </Hero>
          <section className="single-room">
           <div className="single-room-images">
           {images.map((item, index)=> {
            return <img key={index} src={item} alt={name} />
           })}
           </div>
           <div className="single-room-info">
           <article className="desc">
           <h3>Detail</h3>
           <p>{description}</p>
           </article>
           <article className="info">
           <h3>Info</h3>
           <h6>Price : ${price} </h6>
           <h6>Size : ${size} SQFT</h6>
           <h6>Max capacity : {
             capacity > 1 ? `${capacity} pepole` :`${capacity} person`
           }
           </h6>
           <h6>{pets ? "Pets allowed" : "Pets not allowed"}</h6>
           <h6>{breakfast && "Free breakfast included"}</h6>
           </article>
           </div>
          </section>
          <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
                {extras.map((item, index)=> { 
                return <li key={index}>- {item}</li>
                })}
            </ul>
          </section>
          </React.Fragment>
        )
      }
}
export default SingleRoom;
