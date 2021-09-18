//Iportar  libería express para acceder al metodo de rutas
const express = require("express");

//Importar librería axios para manejar llamadas asíncronas a servidor de información de pokemones
const axios = require("axios");

// Crear variable de enrutamientos
const router = express.Router();

// Primero, la ruta principal, no hay nada mas que un mensaje
router.get("/", (req, res) => {
    console.log("We are in the main route");
    let message = "Nothing here yet " + "<br>";
    message += "If you wanna se something cool, route yourself to /pokemones:" + "<br>";
    res.send(message);
    
})


// Ruta solicitada en el desafío para generar el API con la información de 150 pokemones
router.get("/pokemones", (req, res) =>{
    console.log("We arrived to pokemones route");

    // Partiendo de la información de cuántos pokemones son, se crea un array vacío de esas posiciones
    const howMany = 150;
    const poks = new Array(howMany - 1);
    for(let i = 0; i < howMany - 1; i++) { poks[i] = i + 1 };

    // Se crea, usando el método map, unarreglo de promesas con los llamados a todos los endpoints de los pokemones
    const pokPromises = poks.map( async (i) => {
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    });

    // Se resuleven todas las promesas simultaneamnete
    Promise.all(pokPromises)
        .then( (response) => {
            // Con el arreglo de respuestas se extrae de cada item solo la información solicitada y se devuelve como un objeto
            let pokemones = response.map( (e) => {

                return {'img' : e.data.sprites.other["official-artwork"]["front_default"],
                        'nombre' : e.data.name}
            })

            // Para compatibilidad y que funcionbe bien, se transforma el arreglo anterior en un JSON
            pokemones = JSON.parse(JSON.stringify(pokemones));

            // y se devuelve como resultado de la ruta
            res.send(pokemones);

        })
        .catch ((error) => {
            console.log(error);
        })

});


// Se exporta el router con la información del manejo de las rutas en elservidor
module.exports = router;