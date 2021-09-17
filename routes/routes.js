//Imporatr libería express
const axios = require("axios");

const express = require("express");



// Crear variable de enrutamientos
const router = express.Router();

router.get("/", (req, res) => {
    console.log("We are in the main route");
    let message = "Nothing here yet " + "<br>";
    message += "If you wanna se something cool, route yourself to /pokemones:" + "<br>";
    res.send(message);
    
})

router.get("/pokemones", (req, res) =>{
    console.log("We arrived to pokemones route");

    const howMany = 150;
    const poks = new Array(howMany - 1);
    for(let i = 0; i < howMany - 1; i++) { poks[i] = i + 1 };

    const pokPromises = poks.map( async (i) => {
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    });

    Promise.all(pokPromises)
        .then( (response) => {
            console.log("respuesta", response.length);

            let pokemones = response.map( (e) => {
                //console.log(e.name, e.sprites.other["official-artwork"]["front_default"]);
                return {'img' : e.data.sprites.other["official-artwork"]["front_default"],
                        'nombre' : e.data.name}
               //console.log(e.data.name);
               //return e.index
            })
            pokemones = JSON.parse(JSON.stringify(pokemones));
            res.send(pokemones);
            //return pokemones;
        })
        .catch ((error) => {
            console.log(error);
        })

});



async function getPokemonesfromAPI(howMany) {
    console.log("and enter in the function to get pokemones");
    const poks = new Array(howMany - 1);
    for(let i = 0; i < howMany - 1; i++) { poks[i] = i + 1 };

    const pokPromises = poks.map( async (i) => {
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        console.log(i, response.data.name, response.data.sprites.other["official-artwork"]["front_default"]);
    });

    //console.log("33 ", pokPromises[33]);
    Promise.all(pokPromises)
        .then ( (response) => {
            console.log(42, response);
        })
        .catch ( (error) => {
            console.log("error, error ", error);
        })

//     Promise.all(pokPromises)
//         .then( (response) => {
//             console.log("respuesta", response.length);

//             const pokList = response.map( (e) => {
//                 console.log(e.name, e.sprites.other["official-artwork"]["front_default"]);
//                 return {"img" : e.sprites.other["official-artwork"]["front_default"],
//                         "nombre" : e.name}
//             })
//             return pokList;
// //            return response.data;
//         })
//         .catch ((error) => {
//             console.log(error);
//         })


}



module.exports = router;