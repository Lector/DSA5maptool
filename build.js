// requirements
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// defines
const dsa5Folder = './DSA5';
const folder = 'DSA5/library/mtscript/public';
const outputFile = path.join(folder, 'defineFunctions.mts');

// delete defineFunctions.mts if exists
if (fs.existsSync(outputFile)) {
  fs.unlinkSync(outputFile);
  console.log('Die vorhandene Datei defineFunctions.mts wurde gelöscht.');
}

// create new defineFunctions.mts with content
fs.readdirSync(folder)
  .filter((file) => file.endsWith('.mts'))
  .forEach((file) => {
    const filename = path.basename(file, '.mts');
    const line = `[h: defineFunction("${filename}", "${filename}@this")]$placeholder\n`;
    const updatedLine = line.replace(/%placeholder%\)\)\]/g, '');
    fs.appendFileSync(outputFile, updatedLine);
  });

// delete mtlib file if exists
const mtlibFile = './DSA5.mtlib';
if (fs.existsSync(mtlibFile)) {
  fs.unlinkSync(mtlibFile);
  console.log('Die bereits vorhandene DSA5.mtlib Datei wurde gelöscht.');
}

// build new mtlib file
if (fs.existsSync(dsa5Folder)) {
    if (process.platform === 'win32') {
        // Windows (7z)
        execSync(`7z a -tzip "${mtlibFile}" "${dsa5Folder}/*"`);
    } else {
        // Linux and MacOS (zip)
        execSync(`zip -r "../${mtlibFile}" ./*`, { cwd: dsa5Folder, stdio: 'inherit' });
    }
}