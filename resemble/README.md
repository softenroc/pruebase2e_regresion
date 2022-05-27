
## Pasos para generar reporte HTML con resemble

 1. Ingresar a la carpeta de resemble
 2. Ejecutar el comando: `npm install`

------------

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