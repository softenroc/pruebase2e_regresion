####  Instrucciones para la ejecución de pruebas aleatorios con RIPuppet
1. Ingresar a la carpeta de ripuppet
2. Ejecutar el comando: `npm install`

### Pasos para la ejecución de pruebas de RIPuppet para Ghost Home
3. Para ejecutar las pruebas de Ghost Home lanzamos el siguiente comando: `npx node index_home.js http://localhost:3001 true`
4. Validamos el mensaje final de la ejecución : `Execution finished. Check the report under the results folder. Saved JSON file!`
5. Por consola, lngresa a la carpeta de `results/` y ejecuta el comando  `http-server -p 80`
6. Ahora abre el navegador de tu preferencia e ingresa a la URL `http://localhost:80`
5. Navega al reporte generado para la ultima ejecución (la carpeta tiene el formato `YYYY-MM-DDTHH.mm.SS.msZ`),
6. Entramos a la subcarpeta `chromium` y damos click en el archivo `report.html` para abrir el reporte en el navegador
7. Damos dos veces click en atras del navefador, para ingresar a la subcarpeta `firefox` y damos click en el archivo `report.html` para abrir el reporte en el navegador


### Pasos para la ejecución de pruebas de RIPuppet para Ghost Admin
3. Para ejecutar las pruebas de Admin Home lanzamos el siguiente comando: `npx node index_admin.js http://localhost:3001/ghost true`
4. Validamos el mensaje final de la ejecución : `Execution finished. Check the report under the results folder. Saved JSON file!`
5. Por consola, lngresa a la carpeta de `results/` y ejecuta el comando  `http-server -p 80`
6. Ahora abre el navegador de tu preferencia e ingresa a la URL `http://localhost:80`
5. Navega al reporte generado para la ultima ejecución (la carpeta tiene el formato `YYYY-MM-DDTHH.mm.SS.msZ`),
6. Entramos a la subcarpeta `chromium` y damos click en el archivo `report.html` para abrir el reporte en el navegador
7. Damos dos veces click en atras del navefador, para ingresar a la subcarpeta `firefox` y damos click en el archivo `report.html` para abrir el reporte en el navegador
