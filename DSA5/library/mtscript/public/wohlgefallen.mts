[h: switchToken(arg(0))]
[h: skill = arg(1)]

[h: gottheit = ""]
[h: karmal = getProperty("KarmaleSF", arg(0), tokenMap(arg(0)))]
[h,foreach(sf, karmal),Code:{
	[h: sf = json.get(sf, "Name")]
	[if(startsWith(sf, "Tradition (")),Code:{
		[gottheit = substring(sf, 11, length(sf) - 1)]
	}]
}]

<!-- Bei Firun sind Kampftechniken zur Jagd wohlgefällig -->
<!-- Bei Tsa darf man sich 4 Talente aussuchen. -->
<!-- Das lösen wir jetzt einfach mal so dass wir bei Firun sinnvolle Jagdtechniken angeben und die 4 Talente bei Tsa ignorieren. Die muss der Benutzter dann eben selbst anhaken -->

[h,if(gottheit != ""),switch(gottheit):
	case "Praioskirche": skills = "Bekehren & Überzeugen, Einschüchtern, Etikette, Götter & Kulte, Magiekunde, Menschenkenntnis, Orientierung, Rechtskunde, Sphärenkunde, Willenskraft";
	case "Rondrakirche": skills = "Dolche, Fächer, Fechtwaffen, Hiebwaffen, Kettenwaffen, Lanzen, Peitschen, Raufen, Schilde, Schwerter, Spießwaffen, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter, Götter & Kulte, Körperbeherrschung, Kraftakt, Kriegskunst, Reiten, Selbstbeherrschung";
	case "Efferdkirche": skills = "Boote & Schiffe, Einschüchtern, Fischen & Angeln, Geographie, Götter & Kulte, Holzbearbeitung, Körperbeherrschung, Orientierung, Schwimmen";
	case "Traviakirche": skills = "Bekehren & Überzeugen, Etikette, Götter & Kulte, Heilkunde Seele, Lebensmittelbearbeitung, Menschenkenntnis, Sagen & Legenden, Stoffbearbeitung, Willenskraft, Zechen";
	case "Boronkirche": skills = "Einschüchtern, Götter & Kulte, Heilkunde Gift, Heilkunde Krankheiten, Heilkunde Seele, Heilkunde Wunden, Menschenkenntnis, Selbstbeherrschung, Sphärenkunde, Sternkunde, Verbergen, Willenskraft, Zechen";
	case "Hesindekirche": skills = "Alchimie, Bekehren & Überzeugen, Geographie, Geschichtswissen, Götter & Kulte, Magiekunde, Mechanik, Pflanzenkunde, Rechnen, Rechtskunde, Sagen & Legenden, Sinnesschärfe, Sphärenkunde, Sternkunde, Tierkunde, Willenskraft";
	case "Firunkirche": skills = "Armbrüste, Blasrohre, Bögen, Diskusse, Dolche, Schleudern, Spießwaffen, Stangenwaffen, Einschüchtern, Fährtensuchen, Fischen & Angeln, Holzbearbeitung, Körperbeherrschung, Kraftakt, Lederbearbeitung, Orientierung, Pflanzenkunde, Selbstbeherrschung, Sinnenschärfe, Steinbearbeitung, Tierkunde, Verbergen, Wildnisleben, Willenskraft";
	case "Tsakirche": skills = "Talente: Bekehren & Überzeugen, Menschenkenntnis, Sagen & Legenden, Singen, Tanzen, Überreden, Verkleiden, dazu vier freiwählbare Talente aus folgender Liste: Heilkunde Seele, Heilkunde Wunden, Holzbearbeitung, Malen & Zeichnen, Metallbearbeitung, Pflanzenkunde, Stoffbearbeitung, Tierkunde";
	case "Phexkirche": skills = "Brett- & Glücksspiel, Gassenwissen, Gaukeleien, Götter & Kulte, Handel, Klettern, Rechnen, Rechtskunde, Schlösserknacken, Sinnesschärfe, Sternkunde, Taschendiebstahl, Überreden, Verbergen, Verkleiden";
	case "Perainekirche": skills = "Bekehren & Überzeugen, Fischen & Angeln, Götter & Kulte, Heilkunde Gift, Heilkunde Krankheiten, Heilkunde Seele, Heilkunde Wunden, Menschenkenntnis, Pflanzenkunde, Sagen & Legenden, Tierkunde, Willenskraft, Zechen";
	case "Ingerimmkirche": skills = "Bekehren & Überzeugen, Einschüchtern, Holzbearbeitung, Kraftakt, Mechanik, Metallbearbeitung, Rechnen, Selbstbeherrschung, Steinbearbeitung";
	case "Rahjakirche": skills = "Bekehren & Überzeugen, Betören, Etikette, Gaukeleien, Heilkunde Seele, Körperbeherrschung, Lebensmittelbearbeitung, Menschenkenntnis, Musizieren, Reiten, Singen, Sinnenschärfe, Stoffbearbeitung, Überreden, Zechen";
	case "Aveskirche": skills = "Bekehren & Überzeugen, Gassenwissen, Geographie, Klettern, Körperbeherrschung, Menschenkenntnis, Orientierung, Reiten, Sinnenschärfe, Überreden, Wildnisleben";
	case "Ifirnkirche": skills = "Bekehren & Überzeugen, Fährtensuchen, Fischen & Angeln, Heilkunde Seele, Heilkunde Wunden, Holzbearbeitung, Körperbeherrschung, Lederbearbeitung, Orientierung, Pflanzenkunde, Selbstbeherrschung, Sinnenschärfe, Tierkunde, Wildnisleben";
	case "Korkirche": skills = "Armbrüste, Blasrohre, Bögen, Diskusse, Dolche, Fächer, Fechtwaffen, Hiebwaffen, Kettenwaffen, Lanzen, Peitschen, Raufen, Schilde, Schleudern, Schwerter, Spießwaffen, Stangenwaffen, Wurfwaffen, Zweihandhiebwaffen, Zweihandschwerter, Einschüchtern, Götter & Kulte, Körperbeherrschung, Kraftakt, Kriegskunst, Selbstbeherrschung, Willenskraft";
	case "Nanduskirche": skills = "Alchimie, Bekehren & Überzeugen, Brett- & Glücksspiel, Gassenwissen, Geschichtswissen, Götter & Kulte, Magiekunde, Menschenkenntnis, Rechnen, Sphärenkunde, Sternkunde, Überreden";
	case "Swafnirkirche": skills = "Hiebwaffen, Schilde, Boote & Schiffe, Einschüchtern, Fesseln, Fischen & Angeln, Heilkunde Seele, Holzbearbeitung, Körperbeherrschung, Kraftakt, Orientierung, Rechtskunde, Sagen & Legenden, Schwimmen, Selbstbeherrschung, Tierkunde, Zechen";
	case "Namenloser Kult": skills = "Bekehren & Überzeugen, Götter & Kulte, Menschenkenntnis, Rechtskunde, Sagen & Legenden, Selbstbeherrschung, Überreden, Verbergen, Verkleiden";
	case "Angroschgeweihter": skills = "Bekehren & Überzeugen, Einschüchtern, Holzbearbeitung, Kraftakt, Mechanik, Metallbearbeitung, Rechnen, Selbstbeherrschung, Steinbearbeitung";
	case "Levthankult": skills = "Betören, Einschüchtern, Gaukeleien, Körperbeherrschung, Kraftakt, Menschenkenntnis, Musizieren, Sinnesschärfe, Tierkunde, Überreden, Zechen";
	case "Marbokult": skills = "Dolche, Götter & Kulte, Heilkunde Gift, Heilkunde Krankheiten, Heilkunde Seele, Heilkunde Wunden, Menschenkenntnis, Selbstbeherrschung, Sphärenkunde, Sternkunde, Überreden, Verbergen, Willenskraft, Zechen";
	case "Ferkinaschamanen": skills = "Heilkunde Krankheiten, Heilkunde Seele, Heilkunde Wunden, Klettern, Körperbeherrschung, Kraftakt, Orientierung, Selbstbeherrschung, Tierkunde, Wildnisleben, Zechen";
	case "Fjarningerschamanen": skills = "Heilkunde Krankheit, Heilkunde Seele, Heilkunde Wunden, Körperbeherrschung, Kraftakt, Metallbearbeitung, Orientierung, Selbstbeherrschung, Wildnisleben";
	case "Gjalskerschamanen": skills = "Einschüchtern, Heilkunde Krankheit, Heilkunde Seele, Heilkunde Wunden, Körperbeherrschung, Kraftakt, Menschenkenntnis, Orientierung, Selbstbeherrschung, Wildnisleben";
	case "Mohaschamanen": skills = "Heilkunde Krankheit, Heilkunde Seele, Heilkunde Wunden, Körperbeherrschung, Kraftakt, Orientierung, Pflanzenkunde, Selbstbeherrschung, Tanzen, Verbergen, Wildnisleben";
	case "Nivesenschamanen": skills = "Fährtensuchen, Heilkunde Krankheit, Heilkunde Seele, Heilkunde Wunden, Körperbeherrschung, Kraftakt, Orientierung, Selbstbeherrschung, Tierkunde, Wildnisleben";
	case "Trollzackerschamanen": skills = "Einschüchtern, Heilkunde Krankheit, Heilkunde Seele, Heilkunde Wunden, Klettern, Körperbeherrschung, Kraftakt, Orientierung, Selbstbeherrschung, Steinbearbeitung, Wildnisleben";
	case "Shinxirkult": skills = "Dolche, Fächer, Fechtwaffen, Hiebwaffen, Kettenwaffen, Lanzen, Peitschen, Raufen, Schilde, Schwerter, Spießwaffen, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter, Armbrüste, Blasrohre, Bögen, Diskusse, Feuerspeien, Schleudern, Wurfwaffen, Götter & Kulte, Körperbeherrschung, Kraftakt, Kriegskunst, Willenskraft";
	default: skills = ""
]

[h: macro.return = min(1, listContains(skills, skill))]