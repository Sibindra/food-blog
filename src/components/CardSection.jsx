import React from "react";
import Card from "./Card";

import datas from "../data.json";

export default function CardSection() {
    return datas.map((data) => {
        return(

            <div id="CardSection">
            <Card
                img={data.img}
                location={data.location}
                locationLink={data.locationLink}
                title={data.title}
                date={data.title}
                desc={data.desc}
                />
        </div>
    )
    });
}
