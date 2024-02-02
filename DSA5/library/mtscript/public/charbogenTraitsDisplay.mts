[h: switchToken(arg(0))]

<div class="panel-ornament">
	<div class="heading heading-additional">
		Vorteile 
		<div>
			<a title="Neuer Vorteil hinzufügen" href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'Vorteile'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Einen neuen Vorteil hinzufügen"></image>
			</a>
			<a title="Vorteile ändern" href="[r: macroLinkText('chareditTrait@this', '', json.append('[]', currentToken(), 'Vorteile'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEdit.png")]' border="0" alt="Vorteile ändern"></image>
			</a>
		</div>
	</div>
	<div>
		[r: charbogenTraits(currentToken(), "Vorteile")]
	</div>
	<div class="heading heading-additional">
		Nachteile
		<div>
			<a title="Neuer Nachteil hinzufügen" href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'Nachteile'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Einen neuen Nachteil hinzufügen"></image>
			</a>
			<a title="Nachteile ändern" href="[r: macroLinkText('chareditTrait@this', '', json.append('[]', currentToken(), 'Nachteile'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEdit.png")]' border="0" alt="Nachteile ändern"></image>
			</a>
		</div>
	</div>
	<div>
		[r: charbogenTraits(currentToken(), "Nachteile")]
	</div>
	<div class="heading heading-additional">
		Allgemeine Sonderfertigkeiten
		<div>
			<a title="Neue allgemeine Sonderfertigkeit hinzufügen" href="[r: macroLinkText('chareditTraitAdd@this', '', json.append('[]', currentToken(), 'AllgemeineSF'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="Eine neue allgemeine Sonderfertigkeit hinzufügen"></image>
			</a>
			<a title="Allgemeine Sonderfertigkeiten ändern" href="[r: macroLinkText('chareditTrait@this', '', json.append('[]', currentToken(), 'AllgemeineSF'))]">
				<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEdit.png")]' border="0" alt="Allgemeine Sonderfertigkeiten ändern"></image>
			</a>
		</div>
	</div>
	<div>
		[r: charbogenTraits(currentToken(), "AllgemeineSF")]
	</div>
</div>