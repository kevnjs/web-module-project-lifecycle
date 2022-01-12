import React from 'react';
import User from './components/User';
import axios from 'axios';
// Use ComponentDidMount to make an API call
// Use ComponentDidUpdate to make an API call
// Hold both the CURRENT USER, USER and FOLLOWER state within the App.js component.


class App extends React.Component {
  state = {
    currentUser: "kevnjs",
    user: "",
    followers: []
  }
  
  handleSearch = e => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(resp => this.setState({
      ...this.state,
      currentUser: resp.data
    }))
    .catch(err => console.log(err))
    .finally( () => {
      this.setState({
        ...this.state,
        user: ""
      })
    })

    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
    .then( resp => this.setState({
      ...this.state,
      followers: resp.data
    }))
    .catch( err => console.log(err))
  }

  textInputChange = e => {
    this.setState({
      ...this.state,
      user: e.target.value
    })
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then( resp => this.setState({
      ...this.state,
      currentUser : resp.data
    }))
    .catch( err => console.log(err))

    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then( resp => this.setState({
      ...this.state,
      followers: resp.data
    }))
    .catch( err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    // if(this.state.currentUser !== prevState.currentUser) {
    //   axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    //   .then( resp => {
    //     // this.setState({
    //     //   ...this.state,
    //     //   followers: resp.data
    //     // })
    //     console.log(resp.data)
    //   })
    //   // .catch(err => console.log(err))
    // }
  }



  render() {
    return(
    <div>
      <h1>GitHub Account</h1>

      <form>
        <input onChange={this.textInputChange} value={this.state.user} type="text" placeholder="Enter a User"/>
        <button onClick={this.handleSearch}>Search</button>
      </form>

      <User 
      name={this.state.currentUser.name}
      username={this.state.currentUser.login} 
      repos={this.state.currentUser.public_repos} 
      followers={this.state.currentUser.followers}
      profileImage={this.state.currentUser.avatar_url}
      followersList={this.state.followers}
      />
    </div>);
  }
}

export default App;
