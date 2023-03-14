import fs from "fs";
import path from "path";

import {zip} from "zip-a-folder"

const workingDir = process.cwd();
const addonsPaths = path.resolve(workingDir, "addons");
if(!fs.existsSync(addonsPaths)) {
    await fs.promises.mkdir(addonsPaths, {recursive: true});
    console.info("Created output directory");
}

zipMacros();
zipMacros2();
zipTools();
zipWildnis();

function zipMacros() {
    doZip("DSA_Macros");
}

function zipMacros2() {
    doZip("DSA_Macros2")
}

function zipTools() {
    doZip("DSA_Tools");
}

function zipWildnis() {
    doZip("DSA_Wildnis");
}

function doZip(addonName) {
    const macrosPath = path.resolve(workingDir, addonName);
    const destination = path.resolve(workingDir, `addons/${addonName}.mtlib`);

    zip(macrosPath, destination).then(() => console.log(`Zipped ${addonName}`)).catch((e) => console.error(`Error zipping ${addonName}`, e));
}
