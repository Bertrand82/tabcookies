var cookieGetter = document.__lookupGetter__("cookie").bind(document);
var cookieSetter = document.__lookupSetter__("cookie").bind(document);


Object.defineProperty(document, 'cookie', {
    get: function() {
        console.log("bg1 get ");
        var storedCookieStr = cookieGetter();
		return storedCookieStr;
    },

    set: function(cookieString) {
		console.log("bg2  Set c.length : ",cookieString.length);
        return cookieSetter(cookieString);
    }
});


