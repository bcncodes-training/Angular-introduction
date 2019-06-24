# Angular Introduction

![](https://imgur.com/lsvhmxr.png)

## Objetivos

Con este ejercicio aprenderás a: 

- Crear una aplicación estática con Angular CLI.
- Construir una aplicación Angular con un componente.
- Construir una aplicación Angular con dos componentes anidados.
- Construir una aplicación Angular usando iteradores anidados.

## Requisitos

- [Fork este repositorio](https://guides.github.com/activities/forking/).
- Clona tu repositorio en tu directorio local `~/code/labs`.

## Entrega

Después de completar el ejercicio ejecuta los siguientes comandos desde tu consola de Git local:

```bash
$ git add .
$ git commit -m "done"
$ git push origin master
```

Desde **tu repositorio github** crea un *pull request* de tu rama master a la rama master del repositorio original.

En el campo nombre del mensaje añade tu nombre, o el de ambos compañeros.

## Introducción

En este ejercicio trabajarás con Angular por primera vez. El objetivo es trabajar en tres proyectos para practicar los conceptos aprendidos.

### Código inicial

En estas aplicaciones no hay código inicial. Tendrás que crearlo desde cero.

## Iteración 1: Photo Album

En la primera iteración construirás un album de fotos, con cada fotografía irá su descripción.

Construirás el álbum en el componente `AppComponent`. El álbum tendrá tres fotos con sus descripciones, **no es necesario tener un array para almacenar las fotos y las descripciones**.

Fácil, no? Añade estilos a la página para darle tu toque personal al álbum de fotos.

![](https://imgur.com/mR2gUcn.png)

## Iteración 2: Artículo con comentarios

Ahora crearás un artículo de un blog con comentarios. Constará de dos componentes diferentes:

- El componente `MainComponent` contendrá el artículo, compuesto de un título(`title`), una imagen(`image`), y una descripción (`description`).
- El componente `CommentsComponent`, que contendrá varios comentarios (puedes añadir los que quieras).

Al final de los comentarios, añadirás un formulario de comentario para darle un toque real al artículo (no es necesario que funcione).

Lo primero que harás será generar el proyecto desde el `Angular CLI`.

![](https://imgur.com/hiZ4hay.png)

## Iteración 3: NBA Champions

Por último, crearás un tablero con los últimos ganadores de la NBA. En este caso se necesita crear un componente que contendrá un array de campeonatos con los siguientes campos:

- año (campo `year`) del campeonato.
- Nombre del equipo campeón (`champion`).
- Una url (`champion-url`) que muestre la información del equipo.
- Una lista con los mejores jugadores del equipo campeón, llamada:  `best-players`

Toda la información se encuentra en [NBA Champions](https://en.wikipedia.org/wiki/List_of_NBA_champions) de wikipedia. En la aplicación se deben mostrar al menos 3. La aplicación debería parecerse a esto:

![](https://imgur.com/upGDj19.png)

<!-- :::info -->
**Nota** 
Se requiere iterar sobre dos colecciones diferentes para mostrar toda la información: `Championships` y `best-players` de cada equipo.
<!-- ::: -->
