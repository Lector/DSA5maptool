----------------------------------------
DSA 5 MapTool Regelsatz v1.4
----------------------------------------

-------------------
Inhalt dieser Datei
-------------------

1. Einige Features
2. Technik
3. Kampfsystem
4. Einberechnung von Vorteilen, Sonderfertigkeiten, etc.
5. Optolith MapTool-Exporter
6. Tokens auf andere Karte verschieben
7. Jagd und Kräutersuche
8. Schwärme
9. Kritik & Feedback
10. Credits

---------------
Einige Features
---------------

- Eigene Bereiche für Kampf, Magie, Karmales etc.
- Inventarsystem & Geldbeutel
- Status und Zustände werden automatisch berechnet, visualisiert und bei Proben beachtet (z. B. Schmerz, Belastung, Liegend...)
- Vorteile & Sonderfertigkeiten werden bei vielen Aktionen automatisch einberechnet (z. B. bei Attacke, Regeneration, etc.).
- Viele Modifkatoren können mit nur einem Mausklick automatisch in Proben einberechnet werden (z. B. Modifikationen bei Zaubern).
- Zonensystem für Rüstungen
- Optionale Regelmechanismen können vom Spielleiter aktiviert oder deaktiviert werden. (z.B. Wundeffekte)
- Attribute lassen sich temporär erhöhen oder senken und werden farblich markiert im Charakterbogen angezeigt.
- Flexibel in der Bedienung damit auch Hausregeln angewendet werden können.
- Tokeneditor zum schnellen Anpassen der Charakterwerte
- Spielleiterbogen mit übersichtlichen Informationen zu Spielercharakteren und NSC's.
- Kompfortables und einfach zu bedienendes NSC-Steuerungssystem (Klick & Go).
- Einfach verwaltbares Handoutsystem zur Bereitstellung von Bildern, Texten und Links.
- Aventurischer Kalender mit Anzeige der Mondphasen
- Und vieles mehr!!!

----------
Technik
----------

Dieses Framework nutzt große Makros und viele Grafiken, die größtenteils erst bei Nutzung und nicht bereits bei Spielstart geladen werden. Je nach Verbindung zum Server und dessen Uploadrate kann das erstmalige Aufrufen der verschiedenen Fenster (z. B. Attacke oder Parade oder auch die Anzeige einer Probe im Chat) etwas länger dauern. Anschließend sollten sich die Daten jedoch im Speicher befinden und die Fenster somit schnell abrufbar sein.

Der Regelsatz ist getestet mit Maptool in der Version 1.13.2.

-----------
Kampfsystem
-----------

Das Kampfsystem enthält ein Zielsystem um einen Schlagabtausch schneller abzuhandeln. Wenn man ein Token verkörpert ist es möglich ein weiteres Token als Ziel auszuwählen um dieses zu attackieren. Viele Modifikationen (AT von Hinten?, Entfernung im Fernkampf, Reichweitenunterschied von Nahkampfwaffen) werden somit automatisch erkannt und in die Eingabemaske eingetragen.

Damit das gut funktioniert beachtet bitte dass ihr immer im Chat auf die Verteidigung klickt. Dadurch wird automatisch erkannt wen ihr pariert oder ausweicht und evtl. Schaden und Zustände werden automatisch berechnet und eingetragen.
Den Spielleitern empfehle ich im Kampf den Shortcut F9 für "nächste Initiativphase" zu nutzen. Wenn die Initiative auf wechselt verkörpert automatisch der Spieler/SL den aktuellen Kampfteilnehmer und ihr könnt mit 2 weiteren Klicks euren Kontrahenten anwählen und ihn attackieren. Ob ein Token vom SL oder von einem Spieler verkörpert wird hängt davon ab ob der Token als PC oder NPC eingestellt ist. Um das zu ändern Doppelklick auf das Token und dann oben rechts im Dropdown umwählen.

Kämpfe laufen dadurch sehr viel schneller ab als bei DSA üblich.

-----------------------------------------------------
Einberechnung von Vorteilen, Sonderfertigkeiten, etc.
-----------------------------------------------------

Folgende Vorteile/Nachteile und SFs berechnet das Framework automatisch:

- Kampf generell: Belastungsgewöhnung, Waffenbegabung, Dunkelsicht, Nachtblind, Blindkampf, Kampf im Wasser, Unterwasserkampf
- Alle Kampfmanöver aus dem Basisregelwerk.
- Folgendes aus Kompendium I und II:

✓ Blindkampf
✓ Gezielter Angriff
✓ Gezielter Schuss
✓ Kampf im Wasser
✓ Meister der improvisierten Waffen
✓ Scharfschütze
✓ Schnellladen
✓ Adersin-Stil
✓ Baliho-Stil
✓ Bornländisches Raufen
✓ Cendrasch-Stil
✓ Hruruzat
✓ Hylailos-Stil
✓ Marwan Sahib-Stil
✓ Mengbilla-Stil
✓ Prem-Stil
✓ Ritter des alten Wegs Stil
✓ Zyklopäisches Ringen
✓ Mächtiger Lanzenangriff
✓ Mächtiger Rundumschlag
✓ Betäubungsschlag
✓ Eisenhagel
✓ Festnageln
✓ Herunterstoßen
✓ Klingensturm
✓ Sprungtritt

Andere Manöver können durch manuelle Eingabe von Erschwernissen abgebildet werden.

- Wundeffekte: Eisern, Zerbrechlich, Hart im Nehmen, Verweichlicht
- Regeneration: Verbesserte Regeneration, Schlechte Regeneration, Magische Regeneration, Karmale Regeneration, Meisterliche Regeneration, Stabile Regeneration
- Talente: Richtungssinn, Unfähig
- Magie und Karmal: Improvisationszauberei (Formel/Geste), Improvisierte Liturgie (Gebet/Geste), Parallelzauberei, Routinierte Zauberwiderholung/Liturgiewiderholung, Schwacher Astralkörper, Lästige Mindergeister, Lieblingszauber/-liturgie, alle magischen SFs die bei bestimmten Merkmalen +1 FP geben
- Natur und Wildnis: Sammler, Jäger, Erfolgreicher Jäger, Weg des Jägers, Weg des Fallenstellers
- Sonstiges: Krankheitsanfällig/-resistenz, Giftanfällig/-resistenz

-------------------------
Optolith MapTool-Exporter
-------------------------

Der Optolith Heldengenerator bietet eine Exportfunktion an um eure Helden direkt ins Framework importieren zu können. Wen ihr euren Helden öffnet könnt ihr unter Profil -> Heldenbogen links einen Button 'Für Maptool exportieren' finden. Damit könnt ihr eine Datei exportieren, welche ihr einfach per Drag & Drop auf die Karte ziehen könnt. Eure Figur ist damit sofort einsatzbereit.

-----------------------------------
Tokens auf andere Karte verschieben
-----------------------------------

Damit ihr eure Tokens auf eine andere Karte verschieben könnt gibt es unter Kampagne unten rechts einen neuen Button. Damit könnt ihr die vorher markierten Tokens auf eine andere Karte verschieben.
Als Spielleiter findet ihr auf dem Spieltisch unter Teleporter ein Token namens "Eingang". Den könnt ihr auf der Objekt-Ebene auf andere Karten kopieren und dort den Eingang zu markieren. Tokens, welche über die Funktion verschoben werden landen dann immer im Eingangsbereich.

Wozu diese neue Funktion? Das hat doch früher auch einfach mittels Copy&Paste funktioniert. Warum kann ich mein Token nicht mehr einfach per Strg+C kopieren und per Strg+V auf die neue Karte einfügen?

Prinzipiell ist das auch weiterhin möglich. Durch das kopieren von Tokens, passiert es allerdings dass euer Token mehrfach in der Kampagne vorkommt. Das kann zu Problemen führen, z.B. wenn ihr noch ein Reittier habt und dieses im Kampfbogen als solches ausgewählt habt. Durch das Kopieren eures Tokens geht diese Information dann verloren. Außerdem ist immer klar welche Version eures Charakters die aktuellen Werte enthält, da es nur 1 Version davon gibt. Für den SL ist es auch angenehmer wenn sichergestellt ist dass ihr beim Kartenwechsel auf einen bestimmten Einstigspunkt landet. Vor allem wenn er eine entsprechende Karte mit Sichthindernissen vorbereitet hat.

Falls der SL dieses Vorgehen erzwingen möchte kann er beim Starten des Servers übrigens auch einstellen dass der große Knopf "Karte wechseln" oben rechts für Spieler ausgeblendet wird.

---------------------
Jagd und Kräutersuche
---------------------

Im Charakterbogen findet ihr unter Naturfertigkeiten auch Funktionen zur Nahrungs-, Kräutersuche und der Jagd.
Wenn ihr als SL hier neue Auswahlmöglichkeiten bereitstellen wollt müsst ihr folgendes beachten:
Bei der Jagd werden alle Tokens angeboten, welche unter Tokeneditor->Jagdwerte im Wasser oder an Land vorkommen. Bei der Kräutersuche sind es alle Tokens, welche unter Doppelklick->Konfiguration als Eigenschaft 'Kraut' aufweisen.
Mit dem Tokeneditor könnt ihr sowohl die Jagdwerte, als auch die Kräutereigenschaften entsprechend einstellen. Die oben genannten Wildnisfunktionen suchen immer auf der aktuellen Karte nach entsprechenden Tokens. Auch die Karte 'Spieltisch' wird standardmäßig nach entsprechenden Tokens durchsucht. Hier könnt ihr also auch Tokens ablegen, welche auf allen Karten gefunden werden können. Alternativ könnt ihr unter "Spieleinstellungen ändern" im SL-Bogen auch einstellen dass die Tokens auf dem Spieltisch nicht in die Suche integriert werden sollen.

--------
Schwärme
--------

Im SL-Bogen lassen sich aus den Tokens von Einzelwesen jetzt ganz einfach Schwarmwesen erzeugen, welche im Kampf genauso bedient werden können wie alle anderen Tokens. Aus einer einzelnen Ratte könnt ihr so ohne Probleme einen Rattenschwarm von 20 Wesen generieren. Über die anderen Buttons könnt ihr einen Schwarm auch in mehrere Teilschwärme aufteilen oder wieder zusammenführen.

-----------------
Kritik & Feedback
-----------------

Bei Fragen, Problemen oder Vorschlägen könnt ihr euch im github melden https://github.com/Lector/DSA5maptool
Dessweiteren bin ich sowohl auf "www.drachenzwinge.de" (Anmeldung nötig), als auch auf "www.orkenspalter.de" unter dem Usernamen "Lector" erreichbar.

Wenn ihr einen Fehler im Framework gefunden habt und mir diesen mitteilen wollt, beschreibt möglichst ausführlich an welcher Stelle und unter welchen Umständen der Fehler aufgetreten ist. Wenn der Fehler mit einem Token zusammenhängt, schickt den Token am besten mit.

--------
Credits
--------

Vielen Dank an alle krativen Köpfe die ihre Grafik-Arbeiten kostenlos zur Verfügung stellen, damit Projekte wie dieses hier nicht nur funktionieren, sondern auch noch gut aussehen:
Ashiroxzer, Ravenmore (http://dycha.net), Lamoot, TRaK, StumpyStrust, game-icons.net, CoveredInFish, yd, Silver Style Studios GmbH (Heldenatelier Fanpaket), Ulisses

Weiterhin Dank an:
- Farlon - Entwickler des Frameworks für DSA 4.1 auf dessen Arbeit ich aufsetzten durfte
- EvS - Der viel der Vorarbeit geleistet hat Farlons Framework zu portieren