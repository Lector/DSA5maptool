----------------------------------------
DSA 5 MapTool Regelsatz v1.3.0
----------------------------------------

-------------------
Inhalt dieser Datei
-------------------

1. Video-Tutorial
2. Einige Features
3. Ladezeiten
4. Kampfsystem
5. Einberechnung von Vorteilen, Sonderfertigkeiten, etc.
6. Jagd und Pflanzensuche
7. Optolith MapTool-Exporter
8. Kritik & Feedback
9. Credits

--------------
Video-Tutorial
--------------

Um sich einen Überblick über den Funktionsumfang zu verschaffen gibt es hier ein umfangreiches Video-Tutorial

https://www.youtube.com/watch?v=1GhtRMBgSWY

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
Ladezeiten
----------

Dieses Framework nutzt große Makros und viele Grafiken, die größtenteils erst bei Nutzung und nicht bereits bei Spielstart geladen werden. Je nach Verbindung zum Server und dessen Uploadrate kann das erstmalige Aufrufen der verschiedenen Fenster (z. B. Attacke oder Parade oder auch die Anzeige einer Probe im Chat) etwas länger dauern. Anschließend sollten sich die Daten jedoch im Speicher befinden und die Fenster somit schnell abrufbar sein.

-----------
Kampfsystem
-----------

Seit der Version 1.1 wurde das Kampfsystem um ein Zielsystem ergänzt um einen Schlagabtausch schneller abzuhandeln. Wenn man ein Token verkörpert ist es nun möglich ein weiteres Token als Ziel auszuwählen um dieses zu attackieren. Viele Modifikationen (AT von Hinten?, Entfernung im Fernkampf, Reichweitenunterschied von Nahkampfwaffen) werden somit automatisch erkannt und in die Eingabemaske eingetragen. Als Spielleiter verkörpert man mit dem Durchschalten durch die Initiative nun automatisch den aktuellen NPC.

Seit Version 1.2 wird nun auch das Eintragen von Lichtquellen unterstützt. Ist die Sichtweite der Karte auf "Nacht" oder "Tag" gesetzt wird beim anvisieren eines Token automatisch die korrekte Sichterschwernis eingetragen, je nachdem wie stark das anvisierte Token beleuchtet wird. Lichtquellen kann man mit Kerzen-Button zuweisen. Die Sichtweite der Karte kann der SL unter Karte->Sichtweite einstellen.

-----------------------------------------------------
Einberechnung von Vorteilen, Sonderfertigkeiten, etc.
-----------------------------------------------------

Folgende Vorteile/Nachteile und SFs berechnet das Framework automatisch:

- Kampf generell: Belastungsgewöhnung, Waffenbegabung, Dunkelsicht, Nachtblind, Blindkampf, Kampf im Wasser, Unterwasserkampf
- Kampfmanöver aus Basisregelwerk, Kompendium I und viele weitere (Betäubungsschlag, Eisenhagel, Festnageln, Herunterstoßen, Klingensturm, Sprungtritt). Andere Manöver können durch manuelle Eingabe von Erschwernissen abgebildet werden.
- Nahkampf: Beidhändig, SF Beidhändiger Kampf
- Fernkampf: Entfernungssinn, Scharfschütze, Berittener Schütze
- Wundeffekte: Eisern, Zerbrechlich, Hart im Nehmen, Verweichlicht
- Regeneration: Verbesserte Regeneration, Schlechte Regeneration, Magische Regeneration, Karmale Regeneration, Meisterliche Regeneration, Stabile Regeneration
- Talente: Richtungssinn, Unfähig
- Magie und Karmal: Improvisationszauberei (Formel/Geste), Improvisierte Liturgie (Gebet/Geste), Parallelzauberei, Routinierte Zauberwiderholung/Liturgiewiderholung, Schwacher Astralkörper, Lästige Mindergeister, alle SFs die bei bestimmten Merkmalen +1 FP geben
- Sonstiges: Krankheitsanfällig/resistenz, Giftanfällig/resistenz

-------------------------------
Jagd und Pflanzensuche
-------------------------------

Im Charakterbogen findet man nun unter Natur Funktionen für die Jagd und Pflanzensuche.

Um als Spielleiter neue Pflanzen und Tiere für diese Funktion einzupflegen geht man wie folgt vor.
Für Tiere kann man einfach ein normales Token anlegen. Im Charakter-/Tokeneditor findet man nun einen Bereich für "Jagdwerte". Dort kann man alle relevanten Daten für ein zu bejagendes Tier eintragen.
Für Pflanzen legt man ebenfalls ein Token an und macht einen Doppelklick auf das Token. Unter Konfiguration stellt man hier jedoch die Eigenschaften auf "Kraut". Nun kann man ebenfalls mit dem Charakter-/Tokeneditor die nötigen Daten eintragen.

Bitte beachte dass die Spieler bei der Jagd und Pflanzensuche immer alle Tokens auf der aktuellen Karte UND dem Spieltisch finden. Mit einer Option in den SL-Einstellungen lassen sich die Tokens auf dem Spieltisch aber explizit ausschließen so dass nur Tokens auf der aktuellen Karte mit einbezogen werden.

-------------------------------
Optolith MapTool-Exporter
-------------------------------

Der Optolith Heldengenerator bietet eine Exportfunktion an um eure Helden direkt ins Framework importieren zu können.
Diese Datei kann einfach per Drag & Drop auf die Karte gezogen werden und ist sofort einsatzbereit.

-----------------
Kritik & Feedback
-----------------

Bei Fragen, Problemen oder Vorschlägen könnt ihr euch im github melden oder einen Kommentar auf orkenspalter hinterlassen
https://github.com/Lector/DSA5maptool
https://www.orkenspalter.de/filebase/index.php?file/2736-dsa5-regelsatz-f%C3%BCr-maptool/#overview

Dessweiteren bin ich sowohl auf "www.drachenzwinge.de" (Anmeldung nötig), als auch auf "www.orkenspalter.de" unter dem Usernamen "Lector" erreichbar.

Auf beiden Foren gibt es auch einen Diskussions-Thread über das Thema:

https://www.drachenzwinge.de/forum/index.php?topic=157842.0
https://www.orkenspalter.de/index.php?thread/33098-vtt-dsa5-erweiterung-f%C3%BCr-maptool/

Wenn ihr einen Fehler im Framework gefunden habt und mir diesen mitteilen wollt, beschreibt möglichst ausführlich an welcher Stelle und unter welchen Umständen der Fehler aufgetreten ist. Wenn der Fehler mit einem Token zusammenhängt, schickt den Token am besten mit.

--------
Credits
--------

Vielen Dank an alle krativen Köpfe die ihre Grafik-Arbeiten kostenlos zur Verfügung stellen, damit Projekte wie dieses hier nicht nur funktionieren, sondern auch noch gut aussehen:
Ashiroxzer, Ravenmore (http://dycha.net), Lamoot, TRaK, StumpyStrust, game-icons.net, CoveredInFish, yd, Silver Style Studios GmbH (Heldenatelier Fanpaket), Ulisses

Weiterhin Dank an:
- Farlon - Entwickler des Frameworks für DSA 4.1 auf dessen Arbeit ich aufsetzten durfte
- EvS - Der viel der Vorarbeit geleistet hat Farlons Framework zu portieren