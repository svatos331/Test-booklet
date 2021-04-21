//  задача: 
let userName = ["col", "a", "col", "a", "b", "col", "a", "b", "a","g"];
function showMessage(userName) {
  let arr = [];
  for (const elem of userName) {
    arr.push({
        name: elem,
        length: userName.filter((v) => v === elem).length,
      }
    )
  }
const forSort = arr.filter((v,i,a)=>a.findIndex(t=>(t.place === v.place && t.name===v.name))===i).sort(function(a, b){return b.length - a.length})
return forSort.map(element => element.name)
}
showMessage(userName)