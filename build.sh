#!/bin/bash

folder="DSA5/library/mtscript/public"
outputFile="$folder/defineFunctions.mts"

if [ -f "$outputFile" ]; then
  rm "$outputFile"
  echo "Die vorhandene Datei defineFunctions.mts wurde gelöscht."
fi

for file in "$folder"/*.mts; do
  filename=$(basename "$file" .mts)
  line="[h: defineFunction(\"$filename\", \"$filename@this\")$placeholder]"
  line="${line//%placeholder%)])}"
  echo "$line" >> "$outputFile"
done

if [ -f "./DSA5.mtlib" ]; then
  rm "./DSA5.mtlib"
  echo "Die bereits vorhandene DSA5.mtlib Datei wurde gelöscht."
fi

if [ -d "./DSA5" ]; then

  # Abfrage, ob das Betriebssystem Windows ist
  if [[ "$(uname -s)" == *"NT"* ]]; then
    # Windows (7z verwenden)
    7z a -tzip "./DSA5.mtlib" "./DSA5/*"
  else
    # Nicht Windows (zip verwenden)
    cd "./DSA5"
    zip -r "../DSA5.mtlib" ./*
    
  fi

fi