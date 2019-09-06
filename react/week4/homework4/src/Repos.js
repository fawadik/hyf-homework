import React from 'react';



class Repos extends React.Component {


    render () {
        let innerText = "";
        const {data, image, reposHeading} = this.props
        console.log(data)
        data.forEach(element => {
          innerText += `<li> ${element} </li>` 
        });
        return (
           <div>
                <img src = {image} width = "150px"></img>
                <h1>{reposHeading}</h1>  
                <ul>
                    {innerText}
                </ul>
           </div>
        )
    }
}

export default Repos;