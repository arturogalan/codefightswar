
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]];

//mia
function rotateImage(a) {
    result = [];
    for (row of a){
        var counter = 0;
        for (number of row){
            result[counter] = result[counter] || [];
            result[counter].unshift(number);
            counter++;
        } 

    } 
    return result;
}

//mia2
function rotateImage22(a) {
    result = [];
    for (row of a){
        for (numberIndex in row){
            result[numberIndex] = result[numberIndex] || [];
            result[numberIndex].unshift(row[numberIndex]);
        } 
    } 
    return result;
}




//mia3
function rotateImage23(a) {
    result = [];
    a.forEach(row =>{
        for (numberIndex in row){
            result[numberIndex] = result[numberIndex] || [];
            result[numberIndex].unshift(row[numberIndex]);
        } 
    });
    return result;
}






//otra solucion, recorrer el array en orden, y los arrays anidados en orden inverso
function rotateImage2(a) {
    var arr = [];
    for(var i = 0; i < a.length; i++){
        var newArr = [];
        for(var j = a[i].length - 1; j >= 0; j--){
            newArr.push(a[j][i]);
        }
        arr.push(newArr);
    }
    return arr;
}






console.log(rotateImage(a))
console.log(rotateImage22(a))
console.log(rotateImage23(a))