/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que
determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2 = peso / altura al cuadrado
Escribe un programa que le pida al usuario su peso y su altura para calcular su IMC e
imprima la frase "Tu IMC es X".
Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir
en la consola la frase "Tu IMC es 20.061728395061728".*/

var peso = prompt("Escriba su peso actual");
var altura = prompt("Escriba su altura");
var resultado = peso / (altura * altura);
document.write("su IMC es " + resultado + ".");
