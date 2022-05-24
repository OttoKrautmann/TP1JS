let numero =parseInt(prompt("ingrese un numero"))
en2 = numero %2;
en3 = numero %3;
en5 = numero %5;
en7 = numero %7;
if (en2 == 0){
    document.write("el numero " + numero + " es dividible en 2")
} else if(en3 == 0){
    document.write("el numero " + numero + " es dividible en 3")    
} else if(en5 == 0){
    document.write("el numero " + numero + " es dividible en 5")    
} else if(en7 == 0){
    document.write("el numero " + numero + " es dividible en 7")    
}else{
    document.write("el numero " + numero + " no es divisible ni en 2, ni en 3, ni en 5 ni en 7")
}