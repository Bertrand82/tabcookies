var cookieGetter = document.__lookupGetter__("cookie").bind(document);
var cookieSetter = document.__lookupSetter__("cookie").bind(document);
var iTab ="1xxBGxx1";
console.log("injectScript start iTab : ",iTab);

/* Start script to inject */
Object.defineProperty(document, 'cookie', {
    get: function () {
        var storedCookieStr = cookieGetter();
        console.log("bg1 get", storedCookieStr);
        return processGetCookieStr_bg(storedCookieStr);
    },

    set: function (cookieString) {
        console.log("bg2  Set", cookieString);
        var newValue = processSetCookieStrt_bg(cookieString);
        return cookieSetter(newValue);
    }
});


var processGetCookieStr_bg = function (storedCookieStr) {
    return processCookyBeforeSend(storedCookieStr,iTab);
};

var processSetCookieStrt_bg = function (cookieString) {
    return processCookyReceived(cookieString,iTab);
   
};




