import React from 'react';
import logo from './logo.svg';
import './App.css';
import { thisExpression } from '@babel/types';

class Myapp extends React.Component {

  state = {
    images:[]
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
  .then(res => res.json())
  .then(data => this.setState({images: data}, 
    () => console.log(data)))
  }

  
  render() {
    return (   
       <>
      {this.state.images.map(img => {
        return (
          <div key={img.id}>
            <img src={img.url} width = "200" />
          </div>
        )
      })}
      </>
    )

  }
}


export default Myapp;
