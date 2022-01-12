import React from "react";

class Follower extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.person.avatar_url}/>
                <p>{this.props.person.login}</p>
            </div>
        )
    }
}

export default Follower;