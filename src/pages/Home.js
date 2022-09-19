import React from "react";
import Advantages from "../components/landing/Advantages";
import Feedback from "../components/landing/Feedback";
import Heading from "../components/landing/Heading";
import Map from "../components/landing/Map";
import MenuDiscover from "../components/landing/MenuDiscover";
import Products from "../components/Products";
import Schedule from "../components/landing/Schedule";
import Stars from "../components/landing/Stars";
import Story from "../components/landing/Story";

const Home = () => {
    document.title = "Gastro | Home"
    return(
        <div className="home">
            <Heading/>
            <Schedule />
            <Story />
            <Advantages />
            <MenuDiscover />
            <Stars />
            <Products loc="home" />
            <Feedback />
            <Map />
        </div>
    )
}

export default Home