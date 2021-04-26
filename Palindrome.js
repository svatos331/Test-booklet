


// Число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях
palindrome =(stringData)=>{
    stringData.split("").reverse().join("") ==  stringData ? console.log(true)  : console.log(false) 
}