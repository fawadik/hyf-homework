const classmates = ["Maria bastos", "Kristina Jensen", "Ilir Memedi"];

let classmate1 = function () {
    return fetch('https://api.github.com/search/repositories?q=user:MariaFBastos')
    .then(response => response.json())
    .then((response) => {
    console.log(response);    
    });
}      

let classmate2 = function () {
    fetch('https://api.github.com/search/repositories?q=user:lil2400')
    .then(response => response.json())
    .then((response) => {
    console.log(response);        
    });
}

let classmate3 = function () {
    fetch('https://api.github.com/search/repositories?q=user:kika75')
    .then(response => response.json())
    .then((response) => {
    console.log(response);    
    });
}

let ul = document.getElementById("classMates");
function renderRepositories () {
    Promise.all([classmate1(), classmate2(), classmate3()]).then(res => console.log(res));
}
renderRepositories();

//lil2400
//kika75
//MariaFBastos