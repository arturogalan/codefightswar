// Mine
function sortArray(array) {
    // Return a sorted array.
    var oddPos = []
    var oddNumbers = []
    oddNumbers = array.filter((elem,index)=>{
      var isOdd = elem % 2 !== 0
      if(isOdd){
        oddPos.push(index)
      }
      return isOdd
    })
    
    oddNumbers.sort((a, b) => (a - b)).forEach((elem,index)=>{
      array[oddPos[index]] = elem
    })
    return array
  }


//Best
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }



