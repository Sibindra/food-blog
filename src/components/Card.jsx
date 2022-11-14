import React from "react";

// images import
import burger from "../images/burger.jpg";

export default function Card() {
    return (
        <div id="Card">
            {/* MAIN CONTAINER image Container is on the left and holds image */}
            <div id="imageContainer">
                <img src={burger} alt="image not found" id="image"/>
            </div>

            {/* MAIN CONTAINER text container on right for text */}
            <div id="textContainer">
                {/* is on top holds location and google map link */}
                <div id="locationContainer">
                    <span id="location">Kathmandu</span>
                    <a href="#" id="locationLink">
                        view in google map
                    </a>
                </div>

                {/* is on middle and holds food title and date of blog  */}
                <div id="titleContainer">
                    <span id="title">Burger</span>

                    <span id="date">Nov 14</span>
                </div>

                {/* description */}
                <span id="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo nesciunt omnis reiciendis!
                </span>
            </div>
        </div>
    );
}
