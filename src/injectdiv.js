(function() {
	console.log("bg injectdiv start ");
	
	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.style.color = 'red';
	div.textContent = 'Injected ';
	
	if (document.body){
		document.body.appendChild(div);
	}
	console.log("injectdiv done");
	
})();