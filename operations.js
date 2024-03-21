const sum = (num1, num2,) => (num1 + num2)
const sub = (num1, num2,) => (num1 - num2)
const mul = (num1, num2,) => (num1 * num2)
const div = (num1, num2,) => (num1 / num2)

const processEnv = process.argv

let num1 = parseInt(processEnv[3])
let num2 = parseInt(processEnv[4])

for (let index = 0; index < processEnv.length; index++) {
    let element = processEnv[index];


    if(element == "-sum"){

        console.log(`Sum : ${(sum(num1, num2))}`)
    }
    else if(element == "-sub"){
        console.log(`Rub : ${(sub(num1, num2))}`)
    }
    else if(element == "-mul"){
        console.log(`Mul : ${(mul(num1, num2))}`)
    }
    else if(element == "-div"){
        console.log(`Divi : ${(div(num1, num2))}`)
    }
}