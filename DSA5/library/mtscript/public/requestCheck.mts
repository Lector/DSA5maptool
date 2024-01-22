[h: check = arg(0)]
[h: label = checkLabel(check)]

[dialog5("requestCheck", "width=425; height=342; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: label] - Spieler zur Probe auffordern</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			[r: header("Probe")]
		</div>
	</body>
</html>
}]