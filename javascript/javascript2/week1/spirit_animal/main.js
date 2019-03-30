const spiritAnimalNames = [ "Arax the Ram", 
                            "Cabaro the Lion", 
                            "Mulop the Octopus", 
                            "Tellun the Elk", 
                            "Ninani the Swan", 
                            "Halawir the Eagle", 
                            "Dineash the Elephant", 
                            "Rumfuss the Boar", 
                            "Suka the Polar Bear", 
                            "Kovo the Ape"
                          ];

var heading = document.createElement("h1");
    heading.setAttribute("id", "heading");
    document.body.appendChild(heading);
    heading.innerText = "Spirit Animal Name Generator";

var p = document.createElement("p");
    p.setAttribute("class", "text");
    document.body.appendChild(p);
    p.innerText = "(Please enter your first-name to get your spirit animal name)";

function spiritAnimalNameGenerator() {
    
    var input = document.getElementById("firstName").value;
        if(input === "") {
            alert("Please enter your first name");
            return;
        }
        else {
        let  randomIndex = Math.floor(Math.random() * 10);
        var spiritAnimalName = spiritAnimalNames[randomIndex];
        var output = document.getElementById("spiritAnimalNameOutput")
        output.innerText = "Name : " + input +  " - " + spiritAnimalName;
        }
}



