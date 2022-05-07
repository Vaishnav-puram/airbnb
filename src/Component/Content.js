import React from 'react';
import "../index.css";
import Nav from "./Nav";
import Header from "./Header";
import Card from "./Card";
// import logo from "./images/image 12.png";
// import logo1 from "./images/Star 1.png";
import Object from "./Object";
export default function Content (){
    let Arr = Object.map((ele)=>{
        // console.log(ele)
        return(
          <Card 
            key={ele.id}
            img1={ele.coverImg}
            img2={ele.coverImg1}
            rating={ele.stats.rating}
            reviewCount={ele.stats.reviewCount}
            country={ele.location}
            title={ele.title}
            price={ele.price}
            openSpots={ele.openSpots} />
        )
      })
      return(
        <div>
        <Nav/>
        <Header/>
        <section className='actual'>
            
        {Arr}
        </section>
        </div>
        
      )}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <div>
//  <Nav/>
//  <Header/>
//  <Card 
//      img1={logo}
//      img2={logo1}
//      rating="5.0 "
//      reviewCount="6"
//      country=" USA"
//      title="Life Lessons with Katie Zaferes"
//      price=" 136 " />
//  </div>
// );