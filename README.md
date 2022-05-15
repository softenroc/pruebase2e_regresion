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

 1. Ingresar a la carpeta de kraken
 2. Ejecutar el comando: `npm install`
 3. Instalar dependencias externas:
 3.1. Instalar ADB (https://www.xda-developers.com/install-adb-windows-macos-linux/)
 3.2 Instalar Java (https://www.java.com/es/download/help/java_win64bit.html)
 3.3. Reiniciar terminal
 5. Ejecutar el comando:` npx kraken-node doctor  ` y validamos ADB y JAVA como [Installed]
 6. Para facilitar la ejecucion de ciertos features en entornos windows/linux/mac, se creo un script en javascript llamado `main_ghost.js` en la carpeta de kraken. Este js se ejecuta con el comando `node main_ghost.js` .
 7. Este despliega un menu de opciones en la consola para:  
-  Dehabilitar todo: (cambia las extensiones de los archivos de .feature a .feature_ ) esto para que kraken no los identifique y los ejecute. 
-  Habilitar todo :  Revierte el proceso anterior.
-  Listado de cada uno de los escenarios de prueba para ghost versiones 3 y 4: Al seleccionar uno de ellos, se habilita para la ejecución.
 8. Una vez deshabilitados todos los feature y habilitado el /los que se se desee probar, se  ejecuta el comando : `npx kraken-node run` , para lanzar la prueba. 
 9. Cuando se ejecuta la prueba de un escenario, se toman screenshots despues de cada paso importante y se guardan en la ruta results/ghost[version]_kraken en formato png con la siguiente estructura: ghost[version]_[id funcionalidad]_[id escenario]_[id del paso]. png . Los escenarios que se modificaron para las pruebas de regresión se encuentran en el siguiente documento: 
[Funcionalidades regresiones semana 6](https://uniandes-my.sharepoint.com/:x:/g/personal/df_rojasr1_uniandes_edu_co/Eb3LvU9h04pAgHj73KMXFDkBNN6t4TXlJhtaunoX_9zBZA?e=27Kgxk "Funcionalidades regresiones semana 6")

Nota: En Windows se genera un error de un path cuando se trata de correr mas de 1 feature. Asi que provisionalmente hay que dejar uno solo con el .feature y los demas cambiarles la extension a por ejm .feature_

## Pasos para generar reporte HTML con resemble

 1. Ingresar a la carpeta de resemble
 2. Ejecutar el comando: `npm install`

### Para reporte HTML de pruebas de regresion con Cypress

1. Una vez finalizada la ejecución de los escenarios que se tomaron de prueba (acorde al documento: [Funcionalidades regresiones semana 6](https://uniandes-my.sharepoint.com/:x:/g/personal/df_rojasr1_uniandes_edu_co/Eb3LvU9h04pAgHj73KMXFDkBNN6t4TXlJhtaunoX_9zBZA?e=27Kgxk "Funcionalidades regresiones semana 6")) , se procede a generar el reporte HTML de regresion para las pruebas con Cypress. 
2. Ingresar a la carpeta de resemble
3. El primer paso es mover los screenshot generados a una ruta result dentro de Cypress. Esta es la ruta base que toma resemble para generar el reporte. Para esto se ejecuta el comando: `node move_screenshots_to_result_path.js` 
4. Una vez finalizada la ejecución se verá en la carpeta `./cypress/results` los screenshot de las funcionalidades para cada version
5. Ahora se ejecuta la creacion de reporte con el comando: `node cypress_report.js` 
6. Al finalizar se crea un archivo report.html en la carpeta `./cypress/results/compare_cypress`
7. Se abre el reporte HTML en el navegador y se analiza la comparacion de cada uno de los steps de los escenarios de prueba ([Funcionalidades regresiones semana 6](https://uniandes-my.sharepoint.com/:x:/g/personal/df_rojasr1_uniandes_edu_co/Eb3LvU9h04pAgHj73KMXFDkBNN6t4TXlJhtaunoX_9zBZA?e=27Kgxk "Funcionalidades regresiones semana 6"))



### Para reporte HTML de pruebas de regresion con Kraken

1. Una vez finalizada la ejecución de los escenarios que se tomaron de prueba (acorde al documento: [Funcionalidades regresiones semana 6](https://uniandes-my.sharepoint.com/:x:/g/personal/df_rojasr1_uniandes_edu_co/Eb3LvU9h04pAgHj73KMXFDkBNN6t4TXlJhtaunoX_9zBZA?e=27Kgxk "Funcionalidades regresiones semana 6")) , se procede a generar el reporte HTML de regresion para las pruebas con Cypress. En la carpeta `./kraken/results`, se almacenan los screenshot de las funcionalidades para cada version.
2. Ingresar a la carpeta de resemble
4. Ahora se ejecuta la creacion de reporte con el comando: `node kraken_report.js` 
5. Al finalizar se crea un archivo report.html en la carpeta `./kraken/results/compare_kraken`
6. Se abre el reporte HTML en el navegador y se analiza la comparacion de cada uno de los steps de los escenarios de prueba ([Funcionalidades regresiones semana 6](https://uniandes-my.sharepoint.com/:x:/g/personal/df_rojasr1_uniandes_edu_co/Eb3LvU9h04pAgHj73KMXFDkBNN6t4TXlJhtaunoX_9zBZA?e=27Kgxk "Funcionalidades regresiones semana 6"))