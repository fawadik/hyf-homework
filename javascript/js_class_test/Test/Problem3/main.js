let output = document.getElementById("names")
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        
        for (var i = 0; i<response.data.length; i++) {
        output.innerHTML += `<div id = firstNames>  ${response.data[i].first_name} </div>`;//response.people[i].name;
        }
        // WRITE CODE HERE
    });