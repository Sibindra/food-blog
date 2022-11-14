import React from "react";
import Card from "./Card";

export default function CardSection() {
        return (
            <div id="CardSection">
                <Card
                    img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
                    location="Kathmandu"
                    locationLink="#"
                    title="Burger"
                    date="15 Nov"
                    desc="hello world"
                />
            </div>
        );
}
