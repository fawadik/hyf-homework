const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Friends',
    days: 3,
    hours: 14,
    minutes: 32,
  },
  {
    title: 'Vikings',
    days: 5,
    hours: 17,
    minutes: 8,
  }
]
//years converted into minutes
const averageLifeSpan = 80*365*24*60;
var totalPercentage = 0;
for (var i = 0; i < seriesDurations.length; i++) {
  //days and hours converted into minutes  
  var timeTakenBySeries = ((seriesDurations[i].days* 24) + seriesDurations[i].hours) * 60 + seriesDurations[i].minutes;
  //below is the percentage calculate using mathematical expression    
  var percentInLife = timeTakenBySeries / averageLifeSpan * 100;
  totalPercentage+= percentInLife;
  var output = '"'+seriesDurations[i].title+'" took '+percentInLife.toFixed(3)+'% of my life';
  console.log(output);
}
console.log('In total that is '+totalPercentage.toFixed(3)+'% of my life');
