const class07Students = [];
/*----------------------below is the function to insert student names in the class07 array---------------------- */
function addStudentToClass(studentName){
    var numberOfStudents=class07Students.length;
    if (numberOfStudents<6 || studentName==="Margrethe"){ //condition for total number of students and Queens name
/*----------------------below is the loop to avoid the duplicate enteries----------------------- */
        for (var i=0; i<class07Students.length; i++){
            if (studentName===class07Students[i]){
                console.log("Student exists with the same name");
            }
            else{
                class07Students.push(studentName); //pushing the student name in the array
            }
        }
    }
    else if (numberOfStudents<6 && studentName===""){ //condition for the empty string
        console.log("Please enter Student name instead of empty string");
    }
    else{
        console.log("Cannot add more students to class 07");
    }
}
/*----------------------below is the function to get total number of students in the class----------------------- */
function getNumberOfStudents(){
    return "There are "+class07Students.length+" students in the class";
}
addStudentToClass("fowad")
console.log(numberOfStudents());