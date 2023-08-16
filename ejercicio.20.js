/*
    Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") 
    devolverá verdadero.
    // La expresión regular que uso para el email en este video 
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
*/

const isEmail = (email="") => {
    if (!email) return console.warn("Debe ingresar un email");
    if (typeof email !== 'string') return console.error("Error ,el valor debe ser una cadena de texto");

    let flag = false; 

    if (/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)) {
        flag = true;
    }

    return console.info(flag);
}

console.info("EJERCICIO 20");
isEmail("");
isEmail(20);
isEmail(true);
isEmail("jrazuri98@gmail.com");
isEmail("jrazuri@gmail");