document.body.background = "background.gif";
var input = document.getElementById("gifName");
var btn = document.getElementById("btn");

function getSearchedGif() {
    
    if (input.value === "") return alert("Please enter the search word!");

    let gifDivs = "";
    let gifsDiv = document.getElementById("gifsDiv");
    gifsDiv.innerHTML = "";

    fetch('https://api.giphy.com/v1/gifs/search?q='+input.value+'&api_key=erlcLeOO7jsiKiKvYirH8mPhJht7Ye42&limit=5')
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        console.log(response.data.length);
        for (var i = 0; i<response.data.length; i++) {
            gifDivs += "<div><img src ="+response.data[i].images.fixed_width.url+"></div>";
        }
        gifsDiv.innerHTML = gifDivs;
    });
}
