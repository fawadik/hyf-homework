const fs = require("fs");

class Mentors {
    constructor (mentors) {
        this.mentors = mentors;
    }
    getListOfMentors () {        
        // const mentorsData = fs.readFileSync(this.mentors).toString();
        // const allMentors = JSON.parse(mentorsData);
        return [
            {
                "name": "Abed",
                "courses": ["NodeJS", "HTML/CSS", "JS"]
            },
            {
                "name": "Benjamin",
                "courses": ["HTML/CSS", "JS"]
            },
            {
                "name": "Marco",
                "courses": ["NodeJS", "JS"]
            }
        ];

    }
    getMentorsByCourseTitle(courseTitle) {
        return ["Abed", "Marco", "Radoslaw"];
    }
    // getMentorByName (mentorName) {              
    //     const allMentors = this.getListOfMentors();
    //     return allMentors.find(requiredMentor => requiredMentor.name.toLowerCase() === mentorName.toLowerCase());
    // }
    // addMentor(newMentor) {        
    //         if (this.getMentorByname(newMentor.name)) {
    //             return "Mentor already Exists";
    //         }

    //         const allMentors = this.getListOfMentors();
    //         allMentors.push(newMentor);
            
    //         const newMentors = JSON.stringify(allMentors, null, 4);
    //         fs.writeFileSync(this.mentors, newMentors);
    //         return "Mentor successfuly added";
       
    // }    
}
module.exports = Mentors;
