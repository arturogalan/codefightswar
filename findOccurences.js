a = [2, 3, 3, 1, 5, 2];

// function firstDuplicate(a) {
//     var uniques = {};
//     for (index in a) {
//         if (uniques[a[index]]) return a[index];
//         uniques[a[index]] = true;
//     }
//     return -1;
// }

function firstDuplicate(a) {
    var uniques = {};
    for (elem of a) {
        if (uniques[elem]) return elem;
        uniques[elem] = true;
    }
    return -1;
}

console.log(firstDuplicate(a))