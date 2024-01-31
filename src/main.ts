//Types vs Interface

interface Persona{
    name:string
    age:number
}

type Person = {
    name:string
    age:number
}

let user: Person

interface Persona {
    dui: number
}

type Animal = {

}


let user2: Persona = {name:"Rudy", age:30,dui:1235124}