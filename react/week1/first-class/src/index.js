import React from 'react';
import ReactDOM from 'react-dom';

class UserList extends React.Component {
    render(){
            const {name, age} = this.props;
            const usersList = <li>{name} -- {age}</li>;          
            return usersList;
           
    }
}

class UserData extends React.Component {
    render() {
                const { users } = this.props;
                const usersData = users.map(user => {
                return <UserList name = {user.name} age = {user.age}/>;
                })
            return <ul>{usersData}</ul>;       
    }
}

const users = [ {   name: "Mark",
                    age: "25"
                },
                {   name: "Paul",
                    age: "26"
                }
            ]
let myRoot = document.getElementById("root");
ReactDOM.render(<UserData  users = {users}/>, myRoot);

