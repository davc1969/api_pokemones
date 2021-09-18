// Importar librería Express para crear el servidor
const express = require("express");

// Importar librería CORS para evitar conflictos en llamadas a servidor
var cors = require('cors');

//Crear variable para manejo del servidor
const app = express()

// Variable para el Puerto
const PORT = process.env.PORT || 3000;


// Sección de Middlewares
// Las rutas se manejaron en un archivo aparte para modularizar el proyecto
const routes = require("./routes/routes.js");

app.use(cors());
app.use(routes);


// Se pone el servidor en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} - Proceso ${process.pid}`);
})