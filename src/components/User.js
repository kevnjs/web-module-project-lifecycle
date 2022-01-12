import React from "react";
import FollowersList from "./FollowerList";

class User extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <img src={this.props.profileImage}/>
                </div>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.username}</p>
                    <p>Total Repos : {this.props.repos}</p>
                    <p>Total Followers : {this.props.followers}</p>
                    <h3>Followers:</h3>
                    <FollowersList followers={this.props.followersList}/>
                </div>
            </div>
           
            
        )
    }
}

export default User;