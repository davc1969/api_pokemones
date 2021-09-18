# Proyecto Pokemones API
### Desafío Latam para crear un API utilizando Promises.all

PAra este desafío se creó un servidor utilizando **express**, y se leyó el endpoint del API de pokemones para leer 150 itemos y obtener de ellos solo cierta información específica (*nombre* y *url de imagen*).
Se utilizó la librería **Axios** para haceer las consultas dentro de un arreglo hecho con el método *map*.  Ese arreglo de promesas se resolvió con el método **Promise.all**, y se devolvió el resultado como el endpoint creado para tal fin en la ruta ***pokemones***.

#### Hecho por Darío Valenzuela - Septiembre 2021
