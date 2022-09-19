import React from "react";

export default function Cards(props) {
    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="cards">
            <div className="card--badge">
         <img className="card1" src={`./images/${props.coverImg}`} alt='' />
                {badgeText && <div id="topleft">{badgeText}</div>}
            </div>

         <div className="title">
         <img className="star" src={'./images/star.png'}  alt="star" />
         <span id="num">{props.stats.rating}</span>
         <span id="light">({props.stats.reviewCount})•</span>
         <span id="light">{props.location}</span>
         <div className="description">
         <p>{props.title}</p>
         <p>From <span id="dark">${props.price}</span> / person</p>
         </div>
         </div>
        </div>


    )
}
