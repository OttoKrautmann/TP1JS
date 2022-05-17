let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));

if(numero1 > numero2){
    document.write("el mayor es el primer numero: " +numero1);
}
else{
    if(numero1 < numero2){
        document.write("el mayor es el segundo numero: " +numero2);
    }
    else{
        document.write("ambos numeros son iguales: " +numero1)
    }
}