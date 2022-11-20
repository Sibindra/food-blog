import React from "react";

export default function Card(props) {
    return (
        <div id="Card">
            {/* MAIN CONTAINER image Container is on the left and holds image */}
            <div id="imageContainer">
                <img src={props.img} alt="image not found" id="image" />
            </div>

            {/* MAIN CONTAINER text container on right for text */}
            <div id="textContainer">
                {/* is on top holds location and google map link */}
                <div id="locationContainer">
                    <span id="location">{props.location}</span>
                    <a href={props.locationLink} id="locationLink">
                        view in google maps
                    </a>
                </div>

                {/* is on middle and holds food title and date of blog  */}
                <div id="titleContainer">
                    <span id="title">{props.title}</span>

                    <span id="date">{props.date}</span>
                    <span id="rating">
                        4.5
                    </span>
                </div>

                {/* description */}
                <div id="descriptionContainer">
                    <span id="desc">
                       {props.desc} 
                    </span>
                </div>
            </div>
        </div>
    );
}
