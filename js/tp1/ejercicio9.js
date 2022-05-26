let palabra = prompt("ingrese una frase");
palabra = palabra.toLowerCase()
console.log(palabra.length)
for(let indice = 0; indice < palabra.length; indice ++){
    if(palabra.charAt(indice) === "a" || palabra.charAt(indice) === "e" || palabra.charAt(indice) === "i" || palabra.charAt(indice) === "o" || palabra.charAt(indice) === "u"){
        document.write(palabra.charAt(indice))
    }
}