@echo off
setlocal enabledelayedexpansion

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

if exist "./DSA5.mtlib" (
  del "./DSA5.mtlib"
  echo Die bereits vorhandene DSA5.mtlib Datei wurde gelöscht.
)

7z.exe a -tzip ./DSA5.mtlib ./DSA5/*