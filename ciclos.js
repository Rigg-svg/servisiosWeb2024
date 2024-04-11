/* let i = 1;

while(i < 11){
    console.log(`Value of number is ${i}`)
    i++;
} */
/* Crear un script que reciba por consola una tabla de multiplicar */

function tabla(){
    const inputs = process.argv;
    
    let value = +inputs[2];

    let tabla_mul = []

    let i = 1

    while(i < 11){
        tabla_mul[i] = value * i
        i++;
    }

    console.table(tabla_mul)
}

tabla()