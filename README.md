### Pruebas E2E 
####   202212 Equipo24


------------


### Integrantes

#####  Alexandra Estefania Fajardo Rojas (a.fajardor@uniandes.edu.co)
#####  Juan Jose Ochoa Ortiz (j.ochoao@uniandes.edu.co)
#####  Dario Fernando Rojas Rosero (df.rojasr1@uniandes.edu.co)

### Funcionalidades

#### https://github.com/softenroc/pruebase2e_regresion/wiki/Funcionalidades

### Escenarios

#### https://github.com/softenroc/pruebase2e_regresion/wiki/Funcionalidades_y_escenarios

### Pros y contras (kraken-cypress)

#### https://github.com/softenroc/pruebase2e_regresion/wiki/Pros_y_Contras

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

##### -- Versión de Ghost : 4.44.0
- Lanzamos un contenedor con la versión 4.44.0 de Ghost (versión mas actualizada contra la que haremos las pruebas de regresión): 

`docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0`
- Esto desplegará en la siguiente dirección la versión de Ghost Admin: http://localhost:3002/ghost

- Al ser el primer ingreso, el sistema nos pedirá crear un usuario nuevo. Los datos para la creación son los siguientes:

> Site title: equipo24
Full name: equipo24
Email address: equipo24@mail.com
Password: equipo24equipo24

- Damos click en Last step y nos saltamos el paso de "invite staff" para la crear la cuenta

-  Accedemos al link http://localhost:3002/ghost : con el usuario  equipo24@mail.com  y la contraseña equipo24equipo24  para validar la creación del usuario.

### Instalacion de pruebase2e_regresion

1. Clonar el proyecto: *git clone git@github.com:softenroc/pruebase2e_regresion.git*

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

#### Para ejecución manual via interfáz gráfica

1. Ejecutar el comando: `cypress open`
2. Ejecutar los escenarios para ghost3 y para ghost4 
3. Al ejecutar las pruebas se almacenaran en el path cypress\cypress\screenshots\features los screenshot relacionados con los escenarios que se tomaron para las pruebas de regresión de la semana :

[Funcionalidades regresiones semana 6](https://uniandes-my.sharepoint.com/:x:/g/personal/df_rojasr1_uniandes_edu_co/Eb3LvU9h04pAgHj73KMXFDkBNN6t4TXlJhtaunoX_9zBZA?e=27Kgxk "Funcionalidades regresiones semana 6")


### Pasos Kraken

#####  1. Abrir en una terminal la carptea Kraken
#####  2. Ejecutar el comando: npm install
#####  3. Ejecutar el comadno: npm install kraken-node
#####  4. Instalar ADB (https://www.xda-developers.com/install-adb-windows-macos-linux/)
#####  5. Reiniciar terminal
#####  6. Ejecutar el comando: npx kraken-node run  

Nota: En Windows se genera un error de un path cuando se trata de correr mas de 1 feature. Asi que provisionalmente hay que dejar uno solo con el .feature y los demas cambiarles la extension a por ejm .feature_
