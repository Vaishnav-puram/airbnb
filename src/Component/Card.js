/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import logo2 from "./images/image 12.png"
// import logo3 from "./images/Star 1.png"
export default function Card(props) {
    // console.log(props);
    let badgeTag;
    if(props.openSpots===0){
        badgeTag="SOLD OUT"
    }else if(props.country==="Online"){
        badgeTag="Online"
    }
    return (
            <div className="top">
                {/* {props.openSpots===0 && <div className="badge">SOLD OUT</div>} */}
                {badgeTag && <div className="badge">{badgeTag}</div>}
                <img src={props.img1} className="logo2" />
                <div className="matter">
                    <img src={props.img2} className="logo3" />
                    <div className="info">
                        <span>{props.rating}</span>
                        <span>({props.reviewCount}    .)</span>
                        <span>{props.country}</span>
                    </div>
                </div>
                <p>{props.title}</p>
                <p><b>${props.price}</b>/ person</p>
            </div>
    )
}