const arrayForMap = [2, 3, 7, 9, 1, 4, 5, 8];
const mapFunction = (arr, fn) => {
    let finishArray = []
    for (const element of arr) {
        finishArray.push(fn(element)) 
    }
    return finishArray;
};


// start function:
mapFunction(arrayForMap, v=>{console.log(v)})