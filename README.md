### Pruebas E2E 
####   202212 Equipo24


------------


### Integrantes

#####  Alexandra Estefania Fajardo Rojas (a.fajardor@uniandes.edu.co)
#####  Juan Jose Ochoa Ortiz (j.ochoao@uniandes.edu.co)
#####  Dario Fernando Rojas Rosero (df.rojasr1@uniandes.edu.co)

### Funcionalidades

#### https://github.com/softenroc/pruebase2e/wiki/Funcionalidades

### Escenarios

#### https://github.com/softenroc/pruebase2e/wiki/Funcionalidades_y_escenarios

### Pros y contras (kraken-cypress)

#### https://github.com/softenroc/pruebase2e/wiki/Pros_y_Contras

### Instrucciones

##### -- Versión de Node: v12.22.1
##### -- Versión de Ghost: 3.41.1

### Pasos Cypress

#####  1. Abrir en una terminal la carptea cypress.
#####  2. Ejecutar el comando: npm install
#####  2.1 Editar el archivo commands.js con los datos de acceso del usuario en ghost admin

#### Para ejecución automática

#####  3.1 Ejecutar el comando: cypress run --headless

#### Para ejecución manual via interfáz gráfica

#####  3.1 Ejecutar el comando: cypress open
#####  3.2 Ejecutar uno de los escenarios del listado


### Pasos Kraken

#####  1. Abrir en una terminal la carptea Kraken
#####  2. Ejecutar el comando: npm install
#####  3. Ejecutar el comadno: npm install kraken-node
#####  4. Instalar ADB(https://www.xda-developers.com/install-adb-windows-macos-linux/)
#####  5. Reiniciar terminal
#####  6. Ejecutar el comando: npx kraken-node run  

Nota: En Windows se genera un error de un path cuando se trata de correr mas de 1 feature. Asi que provisionalmente hay que dejar uno solo con el .feature y los demas cambiarles la extension a por ejm .feature_
