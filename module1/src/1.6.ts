function add(num1 : number, num2:number):number {
    return num1+num2;
}

add(2, 3)


const addNumbers = (num1:number, num2:number = 10):number => num1+num2

const userData = {
    name: "Riead",
    balance: 10,
    addBalance(balance:number){
        return `My Balance is now: ${this.balance + balance}`
    }
}


const arr:number[] = [1, 2, 5, 7]

const newArr: number[]  = arr.map((num: number): number=> num*num)

console.log(newArr)


const mentor1 = {
    nextJs: "Mezbah",
    typeScript: "Gias",
    dmbs: "Mir"
}

const mentor2 = {
    oop: "Mahid",
    prigmas: "Ashik"
}

