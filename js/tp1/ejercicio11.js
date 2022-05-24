let numero =parseInt(prompt("ingrese un numero"))
en2 = numero %2;
en3 = numero %3;
en5 = numero %5;
en7 = numero %7;
switch(en2){
    case(0):
    document.write("el numero " + numero + " es dividible en dos");
    break;
    default:
    document.write("el numero " + numero + " no es dividible en dos");
}
switch(en3){
    case(0):
    document.write("<br>el numero " + numero + " es dividible en tres");
    break;
    default:
    document.write("<br>el numero " + numero + " no es dividible en tres");
}
switch(en5){
    case(0):
    document.write("<br>el numero " + numero + " es dividible en cinco");
    break;
    default:
    document.write("<br>el numero " + numero + " no es dividible en cinco");
}
switch(en7){
    case(0):
    document.write("<br>el numero " + numero + " es dividible en siete");
    break;
    default:
    document.write("<br>el numero " + numero + " no es dividible en siete");
}