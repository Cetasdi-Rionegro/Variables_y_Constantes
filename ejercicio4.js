/*Ejercicio 4
Escribe un programa que le pida al usuario su nombre, año actual y año de nacimiento.
El programa debe imprimir su nombre y edad actual en la consola con la frase "Hola
Sergio, Tienes X años". Por ejemplo, asumiendo que el año actual es 2021 y el
usuario ingresa 2000, el programa debe imprimir en la consola:
Tienes 21 años
Por el momento no debemos preocuparnos si realmente no nos entrega la edad real ya
que más adelante seremos mucho más especificos con los meses para así obtener la
edad real.*/
var nombre;
nombre = prompt("Escriba su Nombre");
var añoactual = prompt("Escriba con números el año actual");
var añonacimiento = prompt("Ahora escriba con números el año en que naciste");
var respuesta = añoactual - añonacimiento;
document.write(
  " Hola " + nombre + " Actualmente usted tiene " + respuesta + " años"
);
