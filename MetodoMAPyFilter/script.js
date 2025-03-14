// Ejemplo 1 de map: Duplicar los números de un array
let numeros = [1, 2, 3, 4, 5];
let duplicados = numeros.map(function(num) {
    return num * 2;
});
document.getElementById("map-result-1").textContent = "Duplicados: " + duplicados.join(", ");

// Ejemplo 2 de map: Convertir un array de nombres a mayúsculas
let nombres = ["juan", "ana", "carlos"];
let nombresMayusculas = nombres.map(function(nombre) {
    return nombre.toUpperCase();
});
document.getElementById("map-result-2").textContent = "Nombres en mayúsculas: " + nombresMayusculas.join(", ");

// Ejemplo 1 de filter: Filtrar números pares
let numerosPares = numeros.filter(function(num) {
    return num % 2 === 0;
});
document.getElementById("filter-result-1").textContent = "Números pares: " + numerosPares.join(", ");

// Ejemplo 2 de filter: Filtrar personas mayores de 18 años
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 17 },
    { nombre: "Carlos", edad: 30 }
];
let mayoresDeEdad = personas.filter(function(persona) {
    return persona.edad >= 18;
});
document.getElementById("filter-result-2").textContent = "Mayores de edad: " + mayoresDeEdad.map(p => p.nombre).join(", ");

// Ejemplo combinado: Duplicar solo los números pares
let numerosParesDuplicados = numeros
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
document.getElementById("combined-result").textContent = "Números pares duplicados: " + numerosParesDuplicados.join(", ");