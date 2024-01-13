del .\library\public\*.css 
del .\library\public\*.js 
del .\library\public\*.html 
xcopy ..\src\ressources ..\public\ressources /s
xcopy ..\public\release .\library\public /s
del DiceTray.mtlib
tar -a -cv -f DiceTray.zip --exclude *.zip  *
rename  DiceTray.zip  DiceTray.mtlib