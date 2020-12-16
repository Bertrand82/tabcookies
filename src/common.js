var getPrefix = function(id) {
    return "$GDE$"+id;
};
 
var processCookyBeforeSend= function(cookiesStr,id) {
    var prefix = getPrefix(id);
    var cookieStrList = cookiesStr.split('; ');
    var listCookies = [];
    cookieStrList.forEach(function(cookieStr){
        if (cookieStr.indexOf(prefix)==0) {
            newStrList.push(cookieStr.substring(prefix.length, cookieStr.length));
        }
    });
    return listCookies.join("; ");
};

var processCookyReceived = function(str,id) {
    return getPrefix(id)+str;
};