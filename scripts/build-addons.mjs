import fs from "fs";
import path from "path";

import {zip} from "zip-a-folder"

const workingDir = process.cwd();
const addonsPaths = path.resolve(workingDir, "addons");
if(!fs.existsSync(addonsPaths)) {
    await fs.promises.mkdir(addonsPaths, {recursive: true});
    console.info("Created output directory");
}

zipMacro();

function zipMacro() {
    doZip("DSA5");
}


function doZip(addonName) {
    const macrosPath = path.resolve(workingDir, addonName);
    const destination = path.resolve(workingDir, `${addonName}.mtlib`);

    zip(macrosPath, destination).then(() => console.log(`Zipped ${addonName}`)).catch((e) => console.error(`Error zipping ${addonName}`, e));
}
