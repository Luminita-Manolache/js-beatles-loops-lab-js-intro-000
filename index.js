// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for(var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i];
    result.push(str);
  }
  return result;
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  let i = 0;

  while(i < facts.length) {

      var result = facts[i] + "!!!";
      i++;
      johnFacts.push(result);
  }
   return johnFacts;
}

function iLoveTheBeatles(num) {
  var resArray = [];
  var i = 0;

  do {
    var result = num[i] + "I love the Beatles!";
    i++;
  }
    while (i < num.length) {

    }
  return resArray;
}
