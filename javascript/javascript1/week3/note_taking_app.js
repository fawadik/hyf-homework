const notes = [];
//function below adds notes to the notes array
function addNotes (id, content) {
  const newObj = {}
        newObj.id = id;
        newObj.content = content; 
        notes.push(newObj);
}
addNotes(1, "good");
addNotes(2, "better");
addNotes(3, "best");
console.log(notes);
//--------------------------------
//function below searches the notes with the specific id
function getNoteFromId (id) {
    if (isNaN(id)) {
        console.log("Please enter valid id");
        return
    }
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            var requiredNote = notes[i];
            console.log(requiredNote);
            return
        }    
    }  
}
getNoteFromId("j");
getNoteFromId(3);
getNoteFromId(5);
//--------------------------------
//function below logs all the notes saved
function logOutNotesFormatted () {
  for(var i = 0; i < notes.length; i++) {
    var formattedNotes = "The note with Id : "+notes[i].id+", has the following text:'"+notes[i].content+"'"; 
    console.log(formattedNotes);
  }  
}
logOutNotesFormatted();
//--------------------------------








