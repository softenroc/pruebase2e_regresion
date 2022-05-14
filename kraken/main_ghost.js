const { exec } = require("child_process");

archivos = ["funcionalidad_acceso_1_g3.feature","funcionalidad_acceso_2_g3.feature","funcionalidad_acceso_3_g3.feature",
  "funcionalidad_acceso_4_g3.feature","funcionalidad_pages_1_g3.feature","funcionalidad_pages_2_g3.feature",  "funcionalidad_pages_3_g3.feature", "funcionalidad_pages_4_g3.feature",  "funcionalidad_post_1_g3.feature",  "funcionalidad_post_2_g3.feature",
  "funcionalidad_post_3_g3.feature",  "funcionalidad_post_4_g3.feature",  "funcionalidad_staff_1_g3.feature",  "funcionalidad_staff_2_g3.feature",  "funcionalidad_staff_3_g3.feature",
  "funcionalidad_staff_4_g3.feature",  "funcionalidad_tags_1_g3.feature",  "funcionalidad_tags_2_g3.feature",  "funcionalidad_tags_3_g3.feature",  "funcionalidad_tags_4_g3.feature",
  "funcionalidad_acceso_1_g4.feature",  "funcionalidad_acceso_2_g4.feature",  "funcionalidad_acceso_3_g4.feature",  "funcionalidad_acceso_4_g4.feature",  "funcionalidad_pages_1_g4.feature",
  "funcionalidad_pages_2_g4.feature",  "funcionalidad_pages_3_g4.feature",  "funcionalidad_pages_4_g4.feature",  "funcionalidad_post_1_g4.feature",  "funcionalidad_post_2_g4.feature",
  "funcionalidad_post_3_g4.feature",  "funcionalidad_post_4_g4.feature",  "funcionalidad_staff_1_g4.feature",  "funcionalidad_staff_2_g4.feature",  "funcionalidad_staff_3_g4.feature",
  "funcionalidad_staff_4_g4.feature",  "funcionalidad_tags_1_g4.feature",  "funcionalidad_tags_2_g4.feature",  "funcionalidad_tags_3_g4.feature",  "funcionalidad_tags_4_g4.feature"];

var fs = require("fs");
var menu = require("console-menu");

var menu_files = [  
  { hotkey: "disable_all", title: "Deshabilitar todo", selected: true },
  { hotkey: "enabled_all", title: "Habilitar todo" }
];

function getMenu_files(){  
  for (const archivo of archivos) {  

    menu_files.push({ hotkey: archivo, title: archivo })  
  }
  menu_files.push({ separator: true });
  return menu_files;
}

const folder = "features";

function rename_feature(feature_name, scenario_id) {
  fs.rename(
    folder + "/funcionalidad_" + feature_name + "_" + scenario_id + ".feature",
    folder + "/funcionalidad_" + feature_name + "_" + scenario_id + ".feature_",
    function (err) {
      if (err) throw err;
      console.log(
        "File Renamed: funcionalidad_" +
          feature_name +
          "_" +
          scenario_id +
          ".feature"
      );
    }
  );
}

function rename_feature(file_name) {
  fs.rename(
    folder + "/" + file_name + "_",
    folder + "/" + file_name,
    function (err) {
      if (err) console.log("File Renamed: funcionalidad_" + file_name);
    }
  );
}

async function disable_all_features() {
  const files = await fs.promises.readdir(folder);
  for (const file of files) {
    if(file.includes('.feature')){    
    const last = file.charAt(file.length - 1);
    if (last != "_") {
      fs.rename(folder + "/" + file, folder + "/" + file + "_", function (err) {
        if (err) throw err;
        console.log(file + "_");
      });
    }}
  }
}

async function enabled_all_features() {
  console.log("Selected enabled_all_features");
  const files = await fs.promises.readdir(folder);
  if(file.includes('.feature')){    
  for (const file of files) {
    const last = file.charAt(file.length - 1);
    if (last == "_") {
      fs.rename(
        folder + "/" + file,
        folder + "/" + file.slice(0, -1),
        function (err) {
          if (err) throw err;
          console.log(file);
        }
      );
    } else {
      console.log(".");
    }
  }}
}

// Menu en consola
//enabled_all_features(3);

menu(getMenu_files(), {
  header: "Kraken Ghost",
  border: true,
}).then((item) => {
  console.log("Item seleccionado: ", item.hotkey);
  if (item.hotkey == "disable_all") {
    disable_all_features();
  } else if (item.hotkey == "enabled_all") {
    enabled_all_features();
  } else if (item) {
    console.log(
      "You chose: " + JSON.stringify(item) + " - file: " + item.hotkey
    );
    rename_feature(item.hotkey);
  } else {
    console.log("You cancelled the menu.");
  }
});
