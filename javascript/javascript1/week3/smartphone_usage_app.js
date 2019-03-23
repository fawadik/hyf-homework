const activities = [];
//funtion below adds activities to the array of objects
function addActivity (date, activity, duration) {
   const newObj = {};
   newObj.date = date;
   newObj.activity = activity;
   newObj.duration = duration;
   activities.push(newObj);
}
addActivity("27/7-2018", "youtube", 45);
addActivity("28/8-2018", "instagram", 15);
addActivity("29/9-2018", "facebook", 45);
console.log(activities);
//----------------------------------
var totalActivities = 0;
var totalDuration = 0;
const usageLimit = 100;
//function below shows the status of all activities
function showStatus () {
  if (activities.length === 0) {
    return "Add some activities before calling showStatus";
  }
  else {
    for (var i = 0; i < activities.length; i++) {
      totalActivities+= 1;
      totalDuration+= activities[i].duration;
     }
  }
  var myStatus1 = "You have added "+totalActivities+" activities. ";
  var myStatus2 = "They amount to "+totalDuration+" mins";
  console.log(myStatus1+myStatus2);  
}
showStatus();
//-----------------------------------






