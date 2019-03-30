const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planterium"];

function shortestWord (danishWords){
console.log(
  danishWords.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
)
}
console.log(shortestWord(danishWords));

