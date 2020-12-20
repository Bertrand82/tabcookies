var getPrefix = function(id) {
    return "_TAB_"+id+"_";
};
 
var processCookyBeforeSend= function(cookiesStr,id) {
    var prefix = getPrefix(id);
    var cookieStrList = cookiesStr.split('; ');
    var listCookies = [];
    cookieStrList.forEach(function(cookieStr){
        if (cookieStr.indexOf(prefix)==0) {
            var newCookie = cookieStr.substring(prefix.length, cookieStr.length);
            listCookies.push(newCookie);
            console.log("cookieStr:" + cookieStr);
            console.log("newCookie:" + newCookie);
        }
    });
    return listCookies.join("; ");
};

var processCookyReceived = function(str,id) {
    return getPrefix(id)+str;
};