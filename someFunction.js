const arrayForSome = ["one", "two", "three", "four", "five", "six", "seven"]
const some = (arr, fn) => {
    for (const element of arr) {
        if (fn(element)) return true
    }
    return false;
};
console.log(some(arrayForSome, (el) => el === "one")) // true
console.log(some(arrayForSome, (el) => el === "one2")) // false





// map
const arrayForMap = [2, 3, 7, 9, 1, 4, 5, 8];
const some = (arr, fn) => {
    let finishArray = []
    for (const element of arr) {
        (fn(element))? finishArray.push(element) : finishArray.push(null) 
    }
    return false;
};