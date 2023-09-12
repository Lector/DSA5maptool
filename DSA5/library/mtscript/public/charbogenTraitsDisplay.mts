[h: switchToken(arg(0))]

<div class="panel-ornament">
	<div class="heading heading-additional">
		Vorteile 
		<div title="Neuer Vorteil hinzufügen">
			<a href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'Vorteile'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Einen neuen Vorteil hinzufügen"></image>
			</a>
		</div>
	</div>
	<div>
		[r: charbogenTraits(currentToken(), "Vorteile")]
	</div>
	<div class="heading heading-additional">
		Nachteile
		<div title="Neuer Nachteil hinzufügen">
			<a href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'Nachteile'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Einen neuen Nachteil hinzufügen"></image>
			</a>
		</div>
	</div>
	<div>
		[r: charbogenTraits(currentToken(), "Nachteile")]
	</div>
	<div class="heading heading-additional">
		Allgemeine Sonderfertigkeiten
		<div title="Neue allgemeine Sonderfertigkeit hinzufügen">
			<a href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'AllgemeineSF'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Eine neue allgemeine Sonderfertigkeit hinzufügen"></image>
			</a>
		</div>
	</div>
	<div>
		[r: charbogenTraits(currentToken(), "AllgemeineSF")]
	</div>
</div>