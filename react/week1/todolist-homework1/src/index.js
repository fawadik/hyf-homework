import React from 'react';
import ReactDOM from 'react-dom';

class ToDoListHeading extends React.Component {
    render() {
        return (
            <h1 id = "heading">Todo List</h1>
        );
    }
}

class ToDoList extends React.Component {
    render() {
        const {description, deadline} = this.props;
            const list = <li>{description} -- {deadline}</li>;          
            return list;           
    }
}

class ListOfTasks extends React.Component {
    render() {
        const { tasks } = this.props;
        const listItems = tasks.map(task => {
            return <ToDoList description = {task.description} deadline = {task.deadline}/>;
        })
        return (
            <>
            <ToDoListHeading />
            <ul>{listItems}</ul>
            </>
        );
    }
}

const tasks =   [   {   description: "Get out of the bed",
                                deadline: "Wed Sep 13 2017"
                            },
                            {   description: "Brush Teach",
                                deadline: "Thu Sep 14 2017"
                            },
                            {   description: "Eat breakfast",
                                deadline: "Fri Sep 15 2017"
                            },
                            {   description: "Get the car to office",
                                deadline: "Saturday Sep 16 2017"
                            },
                            {   description: "Go to Hyf Class",
                                deadline: "Sunday Sep 17 2017"
                            },
                            {   description: "Start next week homework",
                                deadline: "Monday Sep 18 2017"
                            }
                        ]

let myRoot = document.getElementById('root')
ReactDOM.render(<ListOfTasks tasks= {tasks} />, myRoot);

