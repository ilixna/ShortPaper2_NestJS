# ShortPaper2_NestJS

[![made-with-typeScript](https://img.shields.io/badge/Made%20with-NestJS-1f425f.svg)](https://nestjs.com/)

## 🔰Integrantes y Commits

| Integrantes | Nombre en Github | Tareas realizadas | Título de los Commits mas importantes | Descripciones de los Commits |
| ------------| ---------------- | ------------------| ----------------------- | ---------------------------- |
| Cumares, Diego | CRONOXT | <p>°Creación de las tablas de la base de datos utilizando TypeORM.</p> | <p>1.- Creacion de las tablas de la base de datos.</p>2.- Se arreglaron algunos errores. | <p>1.- Se crearon la tablas doctor, especialidad, especialidad_categories_doctor, a traves de los entity.</p>2.- Se agregó la clase abstracta de Persona para que la clase Doctor extienda de ella y a su vez que la clase DoctorEntity Extienda de doctor para adoptar sus comportamientos.|
| Dias, Iliana | ilixna | <p>°Creación de las clases DoctorService y DoctorController. </p>°Creación de la interfaz IBusqueda. | <p>1.- Creación de la interface IBusqueda. </p>2.- Cambios importantes en Controller y Servicio de doctor. | <p>1.- Creación de la interface IBusqueda y se arreglaron algunos detalles dentro de la clase DoctorController Y DoctorService. </p>2.- Se crearon los métodos busquedaDoctores y busquedaFiltradaDoctores en servicio y en el controlador busquedaDoctores y buscarDoctorPorEspecialidad. Ademas, se creo la clase ResponseToReturn para facilitar el manejo de los datos. |
| Gavidia, Franco | SARKOT07 | <p>°Creación de la busqueda de todos los doctores. </p><p>°Creación de la busqueda filtrada por especialidad. | <p>1.- Se agrego el repositorio de busqueda. </p><p>2.- Se agrego la busquedafiltrada. </p> | <p>1.- Se agrego la búsqueda de todos los doctores, también se modifico la interface IBusqueda. </p><p>2.- Se agrego la búsqueda filtrada por especialidad, y se modifico las tablas de la entidad doctor. </p> |

## 📑Pre-requisitos
- [Node](https://nodejs.org/en/) - Descargar el Último LTS
- [NestJS](https://www.typescriptlang.org) - Descargar la versión 8.2.5
## 📌Instalación

Para instalar [NestJS](https://nestjs.com/) haciendo uso de npm.

```
npm i -g @nestjs/cli@8.2.5
```

Procedemos a clonar el repositorio

```
git clone https://github.com/ilixna/ShortPaper2_NestJS.git
```

Instalamos los módulos necesarios

```
npm install
```
## ⚙️Ejecutar el Servicio

Para iniciar el servicio se debe correr el comando:
```
npm run start:dev
```

## 🌎Colaboladores

- **Diego Cumares** - [CRONOXT](https://github.com/CRONOXT)
- **Iliana Dias** - [ilixna](https://github.com/ilixna)
- **Franco Gavidia** - [SARKOT07](https://github.com/SARKOT07)