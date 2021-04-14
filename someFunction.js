const arrayForSome = ["one", "two", "three", "four", "five", "six", "seven"]
const some = (arr, fn) => {
    for (const element of arr) {
        if (fn(element)) return true
    }
    return false;
};
console.log(some(arrayForSome, (el) => el === "one")) // true
console.log(some(arrayForSome, (el) => el === "one2")) // false