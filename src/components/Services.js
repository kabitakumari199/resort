import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

 class Services extends Component  {
   
      constructor(props){
        super(props);
       this.state = {
        service: [
          {
          icon:<FaCocktail/>,
          title:'Free Cocktail',
          info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            icon:<FaHiking/>,
            title:'Endless Hiking',
            info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            icon:<FaShuttleVan/>,
            title:'Free Shuttle',
            info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            icon:<FaBeer/>,
            title:'Strongest Bear',
            info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
           ]
        
          }
    }

      render(){
        return(
          <section className="services">
            <Title Title="Services" />
            <div className="services-center">
            {this.state.service.map((item,index)=>{
              return <article key={index} className="service">
                 <span>{item.icon}</span>
                 <h6>{item.title}</h6>
                 <p>{item.info}</p>
              </article>
            })}
            </div>
          </section>
        );
      }
}
export default Services;
