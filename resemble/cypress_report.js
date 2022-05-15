const compareImages = require("resemblejs/compareImages");
const config = require("./config_cypress.json");
const fs = require("fs");

const { viewportHeight, viewportWidth, browsers, options } = config;

function scenario(feature_id, scenario_id, info) {
  console.log(`Init scenario:  F: ${feature_id} - S: ${scenario_id}`);
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Feature #: xxx</h2>
        <h2>Escenario #: ${feature_id}</h2>
        <h2>Step #: ${scenario_id}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference Ghost v3.41.1</span>
        <img class="img2" src="../ghost3_cypress/ghost3_${feature_id}_${scenario_id}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test Ghost 4.40.0</span>
        <img class="img2" src="../ghost4_cypress/ghost4_${feature_id}_${scenario_id}.png" id="refImage" label="Reference">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="compare_${feature_id}_${scenario_id}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function bodyReport(resInfo){
  body = '';
  index = 0;
  console.log(" Init bodyReport");

  for (let feature_id = 1; feature_id <= config.features.length; feature_id++) {
    for ( let scenario_id = 1;   scenario_id <= config.scenarios.length;  scenario_id++ ) {  
      screenshot_compare_aux =`../cypress/results/compare_cypress/compare_${feature_id}_${scenario_id}.png`;      

      console.log(`Compare: ${screenshot_compare_aux}`);      

      if (fs.existsSync(screenshot_compare_aux)) {
        console.log(` *** Exist : ${screenshot_compare_aux}`);      
        body= body + scenario(feature_id, scenario_id, resInfo[index])     
        index++;
      }    
    }
  }
  console.log("****************************");
  console.log("*** BODY: ["+body+"]");
  console.log("****************************");
  return body;
}
function createReport(datetime, resInfo) {

  return `
    <html>
        <head>
            <title> Equipo 24 Cypress Compare report</title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
          <h1> Equipo 24 Cypress Compare report</h1>
            <h1>Report Before for 
                 <a href="${config.url_before}"> ${config.url_before}</a>
            </h1>
            <h1>Report After for 
            <a href="${config.url_after}"> ${config.url_after}</a>
            </h1>
            <p>Executed: ${datetime}</p>
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
    for ( let scenario_id = 1;   scenario_id <= config.scenarios.length;  scenario_id++ ) {      

      screenshot_ghost3_aux =`../cypress/results/ghost3_cypress/ghost3_${feature_id}_${scenario_id}.png`;
      screenshot_ghost4_aux =`../cypress/results/ghost4_cypress/ghost4_${feature_id}_${scenario_id}.png`;

      console.log(`Reference: ${screenshot_ghost3_aux}`);
      console.log(`test: ${screenshot_ghost4_aux}`);

      if (fs.existsSync(screenshot_ghost3_aux) && fs.existsSync(screenshot_ghost4_aux)) {
      console.log(`Compare feature:${feature_id} scenario: ${scenario_id}`);
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
        `../cypress/results/compare_cypress/compare_${feature_id}_${scenario_id}.png`,
        data.getBuffer()
      );
      index++;
      }
    }   
  }

  fs.writeFileSync(
    `../cypress/results/compare_cypress/report.html`,
    createReport(datetime, resultInfo)
  );
  fs.copyFileSync("./index.css", `../cypress/results/compare_cypress/index.css`);

  console.log(
    "------------------------------------------------------------------------------------"
  );
  //console.log("Execution finished. Check the report under the results folder : ",JSON.stringify(resultInfo,null,'\t'));
  console.log("Execution finished. Check the report under the results folder ");
  //return resultInfo;
}
(async () => console.log(await executeValidateImagesAndCreateReport()))();
