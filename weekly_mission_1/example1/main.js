// EXAMPLE 1: Objetos de JS


// 1. CREACION DE UN OBJETO /

let myCar = new Object(); // Creacioón de un objeto
myCar.make = 'Ford'; // Guardadndo un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = '1969';

console.log(myCar) // Imprimiendo objeto.

// 2. DECLARACIÓN DE UN OBJETO CON VARIABLES LOCALES Y  PÚBLICAS

const myModule = (() => {

    // Variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1, 2, 3, 4]
    const baz = "Soy un valor que va ser expuesto"


    // Variable para guardar las variables locale
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro volo público",
        publicBaz: baz
    }

    // Exposición de variables locales
    return exported
})()

console.log(myModule)

