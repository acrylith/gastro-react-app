import React from "react";

import Heading from "../components/Heading";
import Headinglist from "../components/HeadingList";

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Heading/>
                <Headinglist/>
            </div>
        )
    }
}

export default Home