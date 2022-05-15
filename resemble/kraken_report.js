const compareImages = require("resemblejs/compareImages");
const config = require("./config_kraken.json");
const fs = require("fs");

const { viewportHeight, viewportWidth, browsers, options } = config;

function scenario(feature_id, scenario_id, step_id, info) {
    console.log(`Init scenario:  FE: ${feature_id} - SC: ${scenario_id} - ST: ${step_id}`);
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2 style="color:blue; font-size: 20px; font-weight: bold;">Feature #: ${feature_id}</h2>
        <h2 style="color:blue; font-size: 20px; font-weight: bold;">Escenario #: ${scenario_id}</h2>
        <h2 style="color:blue; font-size: 20px; font-weight: bold;">Step #: ${step_id}</h2>
        <p style="color:green; font-size: 17px; font-weight: bold;">Data: ${JSON.stringify(info,undefined, 4)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Referencia Ghost v3.41.1</span>
        <img class="img2" src="../ghost3_kraken/ghost3_${feature_id}_${scenario_id}_${step_id}.png" id="refImage" label="Referencia">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test Ghost 4.40.0</span>
        <img class="img2" src="../ghost4_kraken/ghost4_${feature_id}_${scenario_id}_${step_id}.png" id="refImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diferencia</span>
        <img class="imgfull" src="compare_${feature_id}_${scenario_id}_${step_id}.png" id="diffImage" label="Diferencia">
      </div>
    </div>
  </div>`;
}

function bodyReport(resInfo) {
    body = '';
    index = 0;
    console.log(" Init bodyReport");

    for (let feature_id = 1; feature_id <= config.features.length; feature_id++) {
        for (let scenario_id = 1; scenario_id <= config.scenarios.length; scenario_id++) {
            for (let step_id = 1; step_id <= config.steps.length; step_id++) {
                screenshot_compare_aux = `../kraken/results/compare_kraken/compare_${feature_id}_${scenario_id}_${step_id}.png`;

                console.log(`Compare: ${screenshot_compare_aux}`);

                if (fs.existsSync(screenshot_compare_aux)) {
                    console.log(` *** Exist : ${screenshot_compare_aux}`);
                    body = body + scenario(feature_id, scenario_id, step_id, resInfo[index])
                    index++;
                }
            }
        }
    }
    console.log("****************************");
    console.log("*** BODY: [" + body + "]");
    console.log("****************************");
    return body;
}
function createReport(datetime, resInfo) {

    return `
    <html>
        <head>
            <title> Equipo 24 Cypress Kraken Reporte de Regresiones</title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body style="color:black; font-size: 20px; font-weight: bold; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <h1> Equipo 24 Cypress Kraken Reporte de Regresiones</h1>
            <h3>URL de Ghost v3 (Version Original): 
                 <a href="${config.url_before}"> ${config.url_before}</a>
            </h3>
            <h3>URL de Ghost v4 (Version posterior): 
            <a href="${config.url_after}"> ${config.url_after}</a>
            </h3>
            <p>Hora de ejecución: ${datetime}</p>
            <div id="visualizer">
              ${bodyReport(resInfo)}
               
            </div>
        </body>
    </html>`;
}

async function executeValidateImagesAndCreateReport() {
    let resultInfo = {};
    let index = 0;
    let datetime = new Date().toISOString().replace(/:/g, ".");

    for (let feature_id = 1; feature_id <= config.features.length; feature_id++) {
        for (let scenario_id = 1; scenario_id <= config.scenarios.length; scenario_id++) {
            for (let step_id = 1; step_id <= config.steps.length; step_id++) {

                screenshot_ghost3_aux = `../kraken/results/ghost3_kraken/ghost3_${feature_id}_${scenario_id}_${step_id}.png`;
                screenshot_ghost4_aux = `../kraken/results/ghost4_kraken/ghost4_${feature_id}_${scenario_id}_${step_id}.png`;

                console.log(`Reference: ${screenshot_ghost3_aux}`);
                console.log(`Test: ${screenshot_ghost4_aux}`);

                if (fs.existsSync(screenshot_ghost3_aux) && fs.existsSync(screenshot_ghost4_aux)) {
                    console.log(`Compare feature:${feature_id} scenario: ${scenario_id} step: ${step_id}`);
                    const data = await compareImages(
                        fs.readFileSync(screenshot_ghost3_aux),
                        fs.readFileSync(screenshot_ghost4_aux),
                        options
                    );
                    resultInfo[index] = {
                        isSameDimensions: data.isSameDimensions,
                        dimensionDifference: data.dimensionDifference,
                        rawMisMatchPercentage: data.rawMisMatchPercentage,
                        misMatchPercentage: data.misMatchPercentage,
                        diffBounds: data.diffBounds,
                        analysisTime: data.analysisTime,
                    };
                    fs.writeFileSync(
                        `../kraken/results/compare_kraken/compare_${feature_id}_${scenario_id}_${step_id}.png`,
                        data.getBuffer()
                    );
                    index++;
                }
            }
        }
    }

    fs.writeFileSync(
        `../kraken/results/compare_kraken/report.html`,
        createReport(datetime, resultInfo)
    );
    fs.copyFileSync("./index.css", `../kraken/results/compare_kraken/index.css`);

    console.log(
        "------------------------------------------------------------------------------------"
    );
    //console.log("Execution finished. Check the report under the results folder : ",JSON.stringify(resultInfo,null,'\t'));
    console.log("Execution finished. Check the report under the results folder ");
    //return resultInfo;
}
(async () => console.log(await executeValidateImagesAndCreateReport()))();
