let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));

if(numero1 > numero2 && numero1 > numero3){
    document.write("el mayor es el primero numero: " + numero1)
}
else{
    if(numero2 > numero1 && numero2 > numero3){
        document.write("el mayor es el segundo numero: " + numero2)
    }
    else{
        document.write("el mayor es el tercer numero: " + numero3)
    }
}
