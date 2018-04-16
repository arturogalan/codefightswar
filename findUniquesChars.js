var s =  "abacabad";

function firstNotRepeatingCharacter(s) {
    var occurs = {};
    for(index in s){
        occurs[s[index]] ? occurs[s[index]] +=1:occurs[s[index]]=1;
    }
    for (index in occurs) {
        if(occurs[index]===1) return index;
    }
    return '_';
}
firstNotRepeatingCharacter2 = s => {
    r = {}
    for (e of s)
        r[e] = -~r[e]
    for (e in r)
        if (r[e] == 1)
            return e
    return '_'
}

function firstNotRepeatingCharacter3(string) {
  var stringData = {};
  for(var i=0; i<string.length; i++) {
    var current = string.charAt(i);
    stringData[current] = stringData[current] || 0;
    stringData[current] += 1;
  }
  for(var key in stringData) {
    if(stringData[key] === 1) {
      return key;
    }
  }
  return '_';  
}


console.log (firstNotRepeatingCharacter(s));
console.log (firstNotRepeatingCharacter2(s));