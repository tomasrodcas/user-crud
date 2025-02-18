## Instrucciones

Existen 2 posibilidades de levantar el proyecto, cada elemento por su lado:

### Docker
Dentro del root existe un docker-compose.yml que levanta ambos servidores, el front y el back. Para correrlos basta con hacer

``` docker-compose up -d ```

Lo cual levantara los servicios en los puertos 5173 y 8080 respectivamente. Basta con ingresar a localhost:5173/users para poder ver la tabla de admin de usuarios.


### Manualmente

#### Back

Para levantar los proyectos manualmente por el lado del backend utilizamos JDK 17+ y mvn 3.8.3 para lo cual realizamos

```mvn clean package -DskipTests (si queremos saltarnos los tests)```

y luego 

``` java -jar target/users-0.0.1-SNAPSHOT.jar```

#### Front

Para levantar el front utilizaremos Node v22 como podemos ver en el archivo .nvmrc, si utilizamos nvm basta con estar en el directorio de frontend y usar 

```nvm use```

Luego de tener node, debemos tener pnpm instalado, hay varias formas, pero se puede instalar de manera global utilizando npm directamente

``` npm i -g pnpm ```

Finalizando, utilizamos pnpm para instalar las dependencias

``` pnpm i```

Creamos un archivo .env para agregar la variable VITE_API_BASE_URL=http://localhost:8080/api donde esto sera la url base hacia nuestro backend en el puerto que este corriendo.

Por ultimo

``` pnpm run dev```

Con esto ya tendremos ambos servicios funcionando de manera local


## Consideraciones

Esta esto en el readme tambien, pero es mas probable que lo lean desde aca. 

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
personales, agregando solo el demo al github y un gitignore al archivo que se usa realmente, para asi poder usar secrets y configurar diversos ambientes. Incluyo en esto aspectos de seguridad como buen CORS configurado, entre otras practicas.

Si bien cypress no quedo funcionando en el pipeline si quedaron algunos tests funcionando, pero solo se pueden correr de forma local. Para esto tambien existe un docker-compose y correspondientes Dockerfiles para levantar contenedores que levanten el front y el back. 

