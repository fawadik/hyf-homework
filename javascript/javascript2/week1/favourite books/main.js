const bookNames = [{ id: "donquixote",
                     title: "Don Quixote",
                     language: "English",
                     author: "Miguel de Cervantes",
                     cover: "images/donquixote.jpg"
                   },
                   { id: "ulysses",
                     title: "Ulysses",
                     language: "English",
                     author: "Joyce",
                     cover: "images/ulysses.jpg"
                   },
                   { id: "mobydick",
                     title:"Moby Dick",
                     language: "Persian",
                     author: "Herman Melville",
                     cover: "images/mobydick.jpg"                     
                   },
                   { id: "hamlet",
                     title:"Hamlet",
                     language: "German",
                     author: "William Shakespeare",
                     cover: "images/hamlet.jpg"
                   }, 
                   { id: "warandpeace",
                     title:"War and Peace",
                     language: "English",
                     author:"Leo Tolstoy",
                     cover: "images/warandpeace.jpg"
                   },
                   { id: "theodyssey",
                     title:"The Odyssey",
                     language: "French",
                     author: "Homer",
                     cover: "images/odyssey.jpg"
                   },
                   { id: "thedivinecomedy",
                     title:"The Divine Comedy",
                     language: "German",
                     author: "Dante Alighieri",
                     cover: "images/divinecomedy.jpg"
                   },
                   { id: "madamebovary",
                     title:"Madame Bovary",
                     language: "Italian",
                     author: "Gustave Flaubert",
                     cover: "images/madamebovary.jpg"
                   },
                   { id: "theiliad",
                     title:"The Iliad",
                     language: "Spanish",
                     author: "Homer",
                     cover: "images/iliad.jpg"
                   },
                   { id: "lolita",
                     title: "Lolita",
                     language: "English",
                     author: "Vladimir Nabokov",
                     cover: "images/lolita.jpg"
                   }];
var heading = document.createElement("h1");
    heading.setAttribute("class", "heading");
    document.body.appendChild(heading);
    heading.innerText = "The List of my Favourite Books";
var div = document.createElement("div");
    div.setAttribute("class", "mainDiv")
    document.body.appendChild(div);
function displayBookNames () {
    var ul = document.createElement("ul");
        ul.setAttribute("class", "list");
        div.appendChild(ul);
    for (var i = 0; i < bookNames.length; i++){
        var li = document.createElement("li");        
        var h1 = document.createElement("h1");
        var h3 = document.createElement("h3");
        var h5 = document.createElement("h5");
        var img = document.createElement("img");
        li.appendChild(h1);
        li.appendChild(h3);
        li.appendChild(h5);
        li.appendChild(img);
        ul.appendChild(li);
        h1.innerHTML=h1.innerHTML + bookNames[i].title;
        h3.innerHTML=h3.innerHTML + bookNames[i].language;
        h5.innerHTML=h5.innerHTML + bookNames[i].author;
        img.src=bookNames[i].cover;
    }
}
displayBookNames(bookNames);
