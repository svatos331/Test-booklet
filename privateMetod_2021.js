//  Приватные методы добавленные в 2021 году
class Person{
    birthYear = 1995;

    get #age(){
        return this.#getNowYear() - this.birthYear
    }

    logAge(){
        console.log(this.#age)
    }


    #getNowYear(){
        return new Date().getFullYear()
    }

}

let person = new Person();