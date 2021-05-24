const array = [{name: "overflow", value: "hidden"}, {name: "cursor", value: "pointer"}]

function helper(data){
let obj = {}
data.map(v => obj[v.name] = v.value)
return obj
}

console.log(helper(array))