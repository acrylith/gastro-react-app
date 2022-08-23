import React from "react";

import Heading from "../components/Heading";
import Schedule from "../components/Schedule";
import Story from "../components/Story";

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Heading/>
                <Schedule />
                <Story />
            </div>
        )
    }
}

export default Home