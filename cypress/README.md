
### Instrucciones


### Pasos Cypress con Generacion de datos aleatorios

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
