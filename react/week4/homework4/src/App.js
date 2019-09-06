import React from 'react';
import './App.css';
import Repos from "./Repos";

class App extends React.Component {

    state = {
          loading: false,
          gitUser: {},
          userRepos: [],
          search: ""
      }
    
  componentDidMount() {
      
  }
  
  handleChange = (e) => {
        this.setState({search: e.target.value})
        
  }
  handleSearch = ()=> {
    console.log(this.state.search)
    this.setState({loading: true})
    let searchQuery = this.state.search
    if (searchQuery === "") {
      alert("Please write the username")
      return
    } else {
      fetch(`https://api.github.com/users/${searchQuery}/repos`)
          .then(response => response.json())
          .then(data => { if (data.length === 0) {
            
            alert("user not found, please type the right username");
            return;
          } else {     
            console.log(data)       
              const repolist = data.map(elem => elem.name)
              let userID = data[0].owner.login
              let img = data[0].owner.avatar_url
              this.setState({
                  loading: false,
                  gitUser: {userID, img},
                  userRepos: repolist,
                  repoHead: "Repositories"
              })}
          })
          
  }
}
  render() {
      //const text = this.state.loading ? "loading..." : this.state.gitUserData[0].owner.login
      
      return (
          <div>
              <h1>GitHub Users Search</h1>
              <input type = "text" placeholder = "Type user id" onChange = {this.handleChange}></input><button onClick = {this.handleSearch}>Search</button>
              <Repos data = {this.state.userRepos} image = {this.state.gitUser.img} reposHeading = {this.state.repoHead}/>
          </div>
      )
  }
}


export default App;
