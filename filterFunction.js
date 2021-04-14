const arrayFiltered = [2, 3, 7, 9, 1, 4, 5, 8];

const filter = (arr, fn) => {
  let finishArray = [];
  for (const element of arr) {
    fn(element) ? finishArray.push(element) : null;
  }
  return finishArray;
};