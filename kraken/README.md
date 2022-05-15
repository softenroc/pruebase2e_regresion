
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

### Para reporte HTML de pruebas de regresion con Kraken

1. Una vez finalizada la ejecución de los escenarios que se tomaron de prueba (acorde al documento: [Funcionalidades regresiones semana 6](https://uniandes-my.sharepoint.com/:x:/g/personal/df_rojasr1_uniandes_edu_co/Eb3LvU9h04pAgHj73KMXFDkBNN6t4TXlJhtaunoX_9zBZA?e=27Kgxk "Funcionalidades regresiones semana 6")) , se procede a generar el reporte HTML de regresion para las pruebas con Cypress. En la carpeta `./kraken/results`, se almacenan los screenshot de las funcionalidades para cada version.
2. Ingresar a la carpeta de resemble
4. Ahora se ejecuta la creacion de reporte con el comando: `node kraken_report.js` 
5. Al finalizar se crea un archivo report.html en la carpeta `./kraken/results/compare_kraken`
6. Se abre el reporte HTML en el navegador y se analiza la comparacion de cada uno de los steps de los escenarios de prueba ([Funcionalidades regresiones semana 6](https://uniandes-my.sharepoint.com/:x:/g/personal/df_rojasr1_uniandes_edu_co/Eb3LvU9h04pAgHj73KMXFDkBNN6t4TXlJhtaunoX_9zBZA?e=27Kgxk "Funcionalidades regresiones semana 6"))

### Links Adicionales relacionados
                    
> "Cómo utilizar la herramienta Kraken", [Cómo utilizar la herramienta Kraken](https://thesoftwaredesignlab.github.io/AutTesingCodelabs/w5/krakenWeb/index.html)
                    
> "GitHub Kraken", [GitHub Kraken](https://github.com/TheSoftwareDesignLab/Kraken)
                    
> "KrakenMobile", [KrakenMobile](https://thesoftwaredesignlab.github.io/KrakenMobile/)
                    
> "Cómo instalar ADB Platform Tools en Windows 11, 10, 8 y 7", [Cómo instalar ADB Platform Tools en Windows 11, 10, 8 y 7](https://www.youtube.com/watch?v=tYY7FTV31vM&ab_channel=IrsealH%26S/)
                    
> "Cucumber 10 Minute Tutorial", [10 Minute Tutorial](https://cucumber.io/docs/guides/10-minute-tutorial/)
