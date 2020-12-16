var cookieGetter = document.__lookupGetter__("cookie").bind(document);
var cookieSetter = document.__lookupSetter__("cookie").bind(document);


Object.defineProperty(document, 'cookie', {
    get: function() {
        var storedCookieStr = cookieGetter();
		console.log("bg1 get",storedCookieStr);
        return processGetCookieStr(storedCookieStr);
    },

    set: function(cookieString) {
		console.log("bg2  Set",cookieString);
        var newValue = processSetCookieStr(cookieString);
        return cookieSetter(newValue);
    }
});

var getPrefix = function(id) {
    return "MPZ_"+id;
};
var processGetCookieStr= function(cookiesStr) {
	return processGetCookieStr2(cookiesStr,'bg');
}

var processGetCookieStr2= function(cookiesStr,id) {
	console.log("bg1 processCookyReceivedSend ",);
    var prefix = getPrefix(id);
    var cookieStrList = cookiesStr.split('; ');
    var listCookies = [];
	var i=0;
	 var r="";
    cookieStrList.forEach(function(cookieStr){
		console.log("bg1 processCookyReceivedSend foreach cooky "+i++,cookieStr);
        r += (prefix + cookieStr+"; ");       
    });
	console.log("bg1 processCookyReceivedSend cookieStrList.length",cookieStrList.length);
    return r;
};
 
var processSetCookieStr= function(cookiesStr) {
	console.log("bg2 processSetCookieStr ",cookiesStr);
	return processCookyBeforeSend(cookiesStr,'bg');
}
var processCookyBeforeSend= function(cookiesStr,id) {
	console.log("bg2 processCookyBeforeSend ",cookiesStr);
    var prefix = getPrefix(id);
    var cookieStrList = cookiesStr.split('; ');
    var listCookies = [];
	var i=0;
	var cookies ="";
    cookieStrList.forEach(function(cookieStr){
		console.log("bg2 processCookyBeforeSend foreach cooky "+i++,cookieStr);
        if (cookieStr.indexOf(prefix)==0) {
            var s = (cookieStr.substring(prefix.length, cookieStr.length));
			cookies+=s;
        }
    });
	console.log("bg2 processCookyBeforeSend cookieStrList.length",cookieStrList.length); 
    return cookies;
};

var processCookyReceived = function(str,id) {
    return getPrefix(id)+str;
};