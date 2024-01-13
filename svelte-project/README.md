# Dice Tray for Maptool

This is a project for a small add-on library meant to be used in [maptool](https://www.rptools.net/toolbox/maptool/)


##Use of the source code
to compile the library from the source code, you need node and the node package manager installed
in the root folder of the repository
```
npm install
```
should install all dependency

### Developement

```
npm run build
```
should run a developpement server serving the webapp. All calls normally sent to maptool are instead directed to the console

### Release

```
npm run release
```
this will compile the code in production mode then run a batch file in ./library that will replace all .css, .html an .js in ./library/library/public with the output that was written in ./public/release
If everything work properly, an archive .mtlib should be created in ./library this is the file that is used by maptool.