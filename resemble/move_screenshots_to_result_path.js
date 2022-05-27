
  // Import the klaw module
  var klaw = require('klaw');
  var mv = require('mv');
  const path = require('path');

  function move_screenshot_to_result_path(directoryToExplore, version){
    var items = [];    
    
    klaw(directoryToExplore)
        .on('data', function (item) {
            if(item.path.includes(version+"_")){
                items.push(item.path)       
                const filename = path.basename(item.path);                  
                mv(item.path, '../cypress/results/'+version+'_cypress/'+filename, function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log('file moved successfully: '+filename);
                });
            }            
        })
        .on('end', function () {
            console.log("files moved: "+items.length);
        })
        .on('error', function (err, item) {
            console.log(err.message)
            console.log(item.path)
        }) ;
      
    }
    
    move_screenshot_to_result_path("../cypress/cypress/screenshots/features/ghost3","ghost3");
    move_screenshot_to_result_path("../cypress/cypress/screenshots/features/ghost4","ghost4");