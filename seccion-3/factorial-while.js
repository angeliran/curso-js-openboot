// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let c = 9;
let factorial = c+1;
while(c >= 1){
    factorial *= c;
    c--;
}
console.log(factorial);