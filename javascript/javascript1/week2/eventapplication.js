function getEventWeekday (eventDay){
    var weekDays= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]; 
    var today = new Date().getDay();//give the number for today
    /*----------------------String concatenation below gives the event day----------------------- */
    var eventWeekDay ="The event will be held on: "+weekDays[(today+eventDay)%7];
    return eventWeekDay;
}
console.log(getEventWeekday(6));