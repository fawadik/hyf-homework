let div = document.getElementById("randomImage");
function loadrandomImages() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        let img = document.createElement("img");
        img.setAttribute("id", "image");
        div.appendChild(img);
        var image = document.getElementById("image");
        image.src = response.message;
        //document.body.background = response.message;
       
    });
    }
let btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.innerText = "Click to get an image";
div.appendChild(btn);
btn.addEventListener("click", loadrandomImages());



//loadrandomImages();