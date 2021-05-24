const array = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0]
const functionSort = (array) => {
    if(!array) return "Передайте массив в фукцию";
    if(array.constructor !== Array) return " Входной параметр не массив";
    // array = array.map(Number).filter(Boolean) // можно поставить тут перед array вопрос, но тогда функци выполниться не корректно // затирает 0 , -0 , null , false , NaN , undefined т.к. в вывод идёт ответ false 
    let result = new Object
    result.Сортировка_массива_по_возрастанию_c_сохранением_повторяющихся_элементов  = [...array].sort(function(a,b){return a-b});
    result.Сортировка_массива_по_убыванию_c_сохранением_повторяющихся_элементов  = array.sort((a, b) => b - a) 
    result.Сортировка_массива_по_возрастанию_c_удалением_повторяющихся_элементов  = [...new Set(array)].sort(function(a,b){return a-b}) 
    result.Сортировка_массива_по_убыванию_c_удалением_повторяющихся_элементов  = [...new Set(array)].sort((a, b) => b - a) 
    result.Наименьший_эллемент  = Math.min(...array)
    result.Наибольший_эллемент  = Math.max(...array)
    return result
}

console.log(functionSort(array))