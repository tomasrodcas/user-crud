# Desafío Técnico para postulantes a Desarrolladores Fullstack
![Status](https://img.shields.io/badge/Lifecycle-active-green)&nbsp; ![Release](https://img.shields.io/badge/Release-v1.0.0-purple)&nbsp; [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Consideraciones

Existen una gran cantidad de mejoras y comportamientos que haria de una forma mas prolija, como el mamejo de errores, traducciones, las notificaciones y algunos estados de cargando... 

Tambien hay algunas libertades que tome dentro de lo abierto de la tarea, como no listar ni crear passwords mediante formularios, sino que de forma
automatica utilizando hashing seguro por detras. Esto en base a que 
personalmente no encuentro recomendable que los admin generen passwords
manualmente, sin embargo quizas falto una funcionalidad para regenerar,
la funcion para que el usuario reciba la password por correo, el reset de esta con un codigo de seguridad temporal entre otros que probablemente
se escapan del alcance de la tarea.

Si bien queria agregar varios otros temas como mejor observabilidad, 
tests en la pipeline, swagger dentro de la misma API, debido al poco
tiempo personal para avanzar en la tarea y algunos problemas que me encontre
con el setup de monorepo y de config de swagger no pude dejar cypress dentro
del pipeline ni tampoco swagger funcionando automaticamente.

Agregaria un poco mas de logging entre capas, pero considerando lo sencillo
del caso de uso y la poca logica de negocio fuera de hace repository.doX
no me hizo tanto sentido. Esto incluye tambien las configs de properties
personales, agregando solo el demo al github y un gitignore al archivo que se usa realmente, para asi poder usar secrets y configurar diversos ambientes.

Si bien cypress no quedo funcionando en el pipeline si quedaron algunos tests funcionando, pero solo se pueden correr de forma local. Para esto tambien existe un docker-compose y correspondientes Dockerfiles para levantar contenedores que levanten el front y el back. 




## Objetivos
>Este desafío tiene como objetivo evaluar tus habilidades como desarrollador Fullstack, especialmente en Java, Spring Boot, Node.js, React, y principios de desarrollo de software. 

## Requerimiento

Esta prueba consiste en desarrollar un mantenedor de usuarios simple por medio de una API de usuarios utilizando Java con Spring Boot en el backend, y un front-end en React que permita realizar el CRUD a través de una interfaz sencilla.

## Requisitos Técnicos

### Backend

- **Java 17**: Debes utilizar Java 17 para el desarrollo del backend.
- **Spring Boot 3.4.x**: Crear una API RESTful utilizando Spring Boot 3.4.2 o la última disponible.
- **OpenAPI & Diseño de APIs**: Debes exponer la API siguiendo las mejores prácticas en cuanto a la definición de rutas y estructura, preferentemente utilizando OpenAPI para el diseño y la documentación de la misma.
- **Maven**: Debes emplear Apache Maven para la construcción del artefacto.
- **CRUD de Usuarios**: La API debe ser capaz de realizar las siguientes operaciones CRUD sobre los usuarios:
  - **Crear**: Registrar un nuevo usuario.
  - **Leer**: Obtener una lista de usuarios o buscar por ID.
  - **Actualizar**: Modificar la información de un usuario existente.
  - **Eliminar**: Eliminar un usuario.
- **Modelo de Usuario**: Los usuarios deben tener los siguientes atributos:
  - `nombres`: String
  - `apellidos`: String
  - `rut`: Long
  - `dv`: String
  - `fechaNacimiento`: Date
  - `correoElectronico`: String
  - `contrasena`: String
- **Persistencia**: Debes utilizar H2 como base de datos en memoria para almacenar los usuarios y el uso de JPA por medio de Spring Data.
- **Separación de Capas**: Debe contener coherencia de separación de capas y distribución de packages.

### Frontend

- **React**: Debes crear una interfaz de usuario para administrar los usuarios utilizando React 17 o superior.
- **Javascript y Typescript**: Debes usar JavaScript y TypeScript.
- **Separación de Capas**: El código debe seguir un diseño de separación de responsabilidades entre componentes, servicios, y gestión de estado.
- **Consumo de APIs**: El front-end debe interactuar con la API de backend para realizar las operaciones CRUD (crear, editar, eliminar, listar).
- **Mantenedor de Usuarios**: La interfaz debe permitir realizar las siguientes acciones sobre los usuarios:
  - Crear un nuevo usuario.
  - Editar un usuario existente.
  - Eliminar un usuario.
  - Listar todos los usuarios.

## Entregables

- **Repositorio Git**: Envía tu desafío como un Pull Request a este repositorio indicando tu nombre, correo y cargo al que postulas. Todos los PR serán rechazados, no es un indicador de la prueba.
- **Instrucciones de Ejecución**: Incluir un archivo `INSTRUCTIONS.md` con las instrucciones necesarias para ejecutar tanto el backend como el frontend o como los contenedores como Docker/Docker Compose si fueran empleados. Considere que no se utilizan IDEs para la revisión de los desafíos, por lo que las instrucciones deberán ser enfocadas para un entorno de ambiente pre productivo (terminal/consola).
- **Documentación OpenAPI**: En el repositorio, debe incluir un archivo `openapi.yaml` con el diseño de la API de usuarios.
