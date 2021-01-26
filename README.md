# API express + mongoose

## index.js 
Este archivo tiene la tarea de levantar nuestro servidor 

## server.js
Este archivo guarda la definición del servidor 
 - Que ritas van a existir 
 - Que middlewares se van a usar 
 - Aqui se pontan los routers del servidor 

## models
Alberla los modelos de base de datos
> Un modelo es la representación de una coleccion y consta de nombre de coleccion y un schema

## usecases
> Agrupada por entidades 

## routes 
Alberga las rutas de nuestro servidor 
> Agrupada por entidades

## lib 
Alberga codigo deutilizable a travez de todas las capas de la arquitectura 

## Proceso de desarrollo

Este es el proceso que debemmos seguir cuando necitamos agregar un nuevo endpoint a nuestra API

1. Modelos: Aegurarnos de tener el accceso a datos que necesitamos para la tarea o crear el modelo 

2. Usecases: Asegurarnos de tener las funciones necesarias para las taresa 

3. Router: Asegurarnos de tener las ruta(s) necesarias o crear la ruta/routes decesaria(s)

4. Asegurarnos de que nuestro router este montado en el server, si no, proceder a montarlo 



