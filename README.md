### Pruebas E2E con Generacion de datos aleatorios
####   202212 Equipo24


------------


### Integrantes

#####  Alexandra Estefania Fajardo Rojas (a.fajardor@uniandes.edu.co)
#####  Juan Jose Ochoa Ortiz (j.ochoao@uniandes.edu.co)
#####  Dario Fernando Rojas Rosero (df.rojasr1@uniandes.edu.co)


------------

### Funcionalidades

#### https://github.com/softenroc/pruebase2e_regresion/wiki/Funcionalidades

### Escenarios totales probados

#### https://github.com/softenroc/pruebase2e_regresion/wiki/Funcionalidades_y_escenarios


### Documento detalle de las Funcionalidades tomadas para generacion de datos


### Pros y contras:



------------

### Instrucciones

##### -- Versión de Node: v12.22.1

- Con la herramienta nvm instalamos la version de node 12.22.1 : [instalar nvm](https://heynode.com/tutorial/install-nodejs-locally-nvm/ "instalar nvm")

##### -- Versión de Ghost : 3.41.1
- Lanzamos un contenedor con la versión 3.41.1 de Ghost (versión actual que usamos): 

`docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1`
- Esto desplegará en la siguiente dirección la versión de Ghost Admin: http://localhost:3001/ghost

- Al ser el primer ingreso, el sistema nos pedirá crear un usuario nuevo. Los datos para la creación son los siguientes:

> Site title: equipo24
Full name: equipo24
Email address: equipo24@mail.com
Password: equipo24equipo24

- Damos click en Last step y nos saltamos el paso de "invite staff" para la crear la cuenta

-  Accedemos al link http://localhost:3001/ghost : con el usuario  equipo24@mail.com  y la contraseña equipo24equipo24  para validar la creación del usuario.

##### Para habilitar la opcion de Members

- Click en la opcion **Labs** del menu
- Click en **Members**
- En la opción Enable members dar click en la opción para habilitar **Members**.
- Validar que en el menú aparece la opción de **Members**

### Pasos Cypress

 1. Ingresar a la carpeta de cypress
 2. Ejecutar el comando:` npm install`
 3. Revisar el archivo` cypress.json` para confirmar las variables de entorno de las pruebas con cypress:

> baseUrl_ghost3: http://localhost:3001,
baseUrl_ghost4: http://localhost:3002,
user : equipo24@mail.com,
password: equipo24equipo24

#### Para ejecución automática
1. Ejecutar el comando:` cypress run --headless`