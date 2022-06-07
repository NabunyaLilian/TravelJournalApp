import React from 'react';
import icon from "../images/location-icon.png"

function Card(props){
    console.log(props.item)
    return(
        <article>
             <div className="flex-container">
            <img className ="card--img" src={props.item.imageUrl}/>
            <div>
                <div className="location--container">
                    <img className="ic-location" src={icon} alt="icon"/>
                    <span className="location--title">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on GoogleMaps</a>
                </div>
                <h1>{props.item.title}</h1>
                <span className="date">{props.item.startDate} - {props.item.endDate}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
        <hr/>
        </article>
    )
}


export default Card;