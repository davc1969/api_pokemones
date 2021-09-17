// Importar librería Express para crear el servidor
const express = require("express");

var cors = require('cors');

//Crear variable para manejo del servidor
const app = express()

// Variable para el Puerto
const PORT = process.env.PORT || 3000;

const routes = require("./routes/routes.js");

app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} - Proceso ${process.pid}`);
})