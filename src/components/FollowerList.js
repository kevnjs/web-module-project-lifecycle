import React from "react";
import Follower from "./Follower";


class FollowersList extends React.Component {
    render() {
        return (
            this.props.followers.map( (person, index) => {
                return <Follower person={person} key={index} />
            })
        )
    }
}

export default FollowersList;