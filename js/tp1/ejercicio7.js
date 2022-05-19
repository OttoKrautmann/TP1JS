let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));

if(numero1 * 2 >= numero2 + numero3){
    document.write("el mayor es :" + numero1)
}
else{
    if(numero2 * 2 > numero1 + numero3){
        document.write("el mayor es :" + numero2)
    }
    else{
        document.write("el mayor es :" + numero3)
    }
}
