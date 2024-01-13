@echo off
setlocal enabledelayedexpansion

REM building the UI
set "originalDir=%CD%"
cd "svelte-project"
call npm run release
cd "%originalDir%"

REM Clearing the old UI and copying the new one.
set "svelteOutput=DSA5\library\public\dist"
if exist "%svelteOutput%" (
  del /q "%svelteOutput%"
  echo Svelte Output gelöscht.
)
xcopy "svelte-project\public\release" "%svelteOutput%" /E

REM make macros globally accessible by appending them to defineFunctions.mts
set "folder=DSA5\library\mtscript\public"
set "outputFile=%folder%\defineFunctions.mts"

if exist "%outputFile%" (
  del "%outputFile%"
  echo Die vorhandene Datei defineFunctions.mts wurde gelöscht.
)

for %%F in ("%folder%\*.mts") do (
  set "filename=%%~nF"
  set "line=[h: defineFunction("!filename!", "!filename!@this")%placeholder%]"
  set "line=!line:%placeholder%^)=)]!"
  echo !line!>>"%outputFile%"
)

REM adding the whole addon to an .mtlib archive
7z.exe a -tzip ./DSA5.mtlib ./DSA5/*