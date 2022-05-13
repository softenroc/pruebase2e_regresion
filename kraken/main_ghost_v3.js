const { exec } = require('child_process');

var fs = require('fs');
var menu = require('console-menu');


const menu_files = [
  { hotkey: 'funcionalidad_acceso_1.feature', title: 'Acceso 1', selected: true  },
  { hotkey: 'funcionalidad_acceso_2.feature', title: 'Acceso 2'},
  { hotkey: 'funcionalidad_acceso_3.feature', title: 'Acceso 3' },
  { hotkey: 'funcionalidad_acceso_4.feature', title: 'Acceso 4' },
  { separator: true },  
];

const folder = 'features';

function rename_feature(feature_name,scenario_id) {  
    fs.rename(folder+'/funcionalidad_'+feature_name+'_'+scenario_id+'.feature', folder+'/funcionalidad_'+feature_name+'_'+scenario_id+'.feature_', function (err) {
        if (err) throw err;
        console.log('File Renamed: funcionalidad_'+feature_name+'_'+scenario_id+'.feature');
      });
    }

    
function rename_feature(file_name) {  
  fs.rename(folder+'/'+file_name+'_', folder+'/'+file_name, function (err) {
      if (err)
      console.log('File Renamed: funcionalidad_'+file_name);
    });
  }

async function disable_all_features() {
  const files = await fs.promises.readdir(folder);
  for (const file of files) {
    fs.rename(folder+'/'+file, folder+'/'+file+'_', function (err) {
      if (err) throw err;
      console.log(file+'_');
    });    
  }
}

  async function enabled_all_features() {
    const files = await fs.promises.readdir(folder);
    for (const file of files) {
      const last = file.charAt(file.length - 1);
      if(last == '_'){
        fs.rename(folder+'/'+file, folder+'/'+file.slice(0, -1), function (err) {
          if (err) throw err;
          console.log(file);
        });    
      } else {
        console.log(".")
      }   
    }
}



// Menu en consola
//enabled_all_features(3);

      menu(menu_files
    , {
        header: 'Kraken Ghost',
        border: true,
    }).then(item => {
        if (item) {
            console.log('You chose: ' + JSON.stringify(item) +' - file: '+item.hotkey);
            rename_feature(item.hotkey);            
            exec('npx kraken-node run', (err, stdout, stderr) => {
              if (err) {
                console.error(`exec error: ${err}`);
                return;
              }
            
              console.log(`Salida:  ${stdout}`);
            });
        } else {
            console.log('You cancelled the menu.');
        }
    });