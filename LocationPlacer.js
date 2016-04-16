


function main() {
	//var value = document.form;
	//console.log(value)
	var tag = document.createElement('script');
	tag.type = "text/javascript";
	tag.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDU6BSr254_EPYeIR86LjNTGELKhP4gm0E&libraries=visualization";
	var scripts = document.getElementsByTagName('script');
	var firstScriptTag = scripts[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	for (var i in scripts) {
		console.log(i)
		console.log(scripts[i])
	}
	//console.log(Object.keys(document.getElementsByTagName('script')))

}


main();