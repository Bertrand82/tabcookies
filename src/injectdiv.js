(function() {
	
	// creation d'un element
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.style.color = 'red';
	div.textContent = ' Cookies Tab Managed ';
	
	if (document.body){
		document.body.appendChild(div);
	}
	
})();