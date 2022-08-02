// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let contador = 9;
let factorial = contador +1;
while(true){
    if(contador < 1){
        break;
    }
    factorial *= contador;
    contador--;
}
console.log(factorial);