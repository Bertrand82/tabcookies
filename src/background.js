chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
		console.log("onBeforeSendHeaders frameId :"+details.frameId+"     parentFrameId "+details.parentFrameId+"    tabId : "+details.tabId+"  detail.url "+details.url);
        details.requestHeaders.forEach(function(requestHeader){
            console.log("bg3 onBeforeSendHeaders header name "+requestHeader.name+"    tabId : "+details.tabId);
            if (requestHeader.name.toLowerCase()=== "cookie") {
                console.log("bg3 onBeforeSendHeaders cookie "+requestHeader.value+"    tabId : "+details.tabId+"  detail.url : "+details.url)
                requestHeader.value = processCookyBeforeSend(requestHeader.value,details.tabId);
            }
        });
        return {
            requestHeaders: details.requestHeaders
        };
    }, {
        urls: [ "*://*/*" ]
    }, ['blocking', 'requestHeaders', 'extraHeaders']
);

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
		details.responseHeaders.forEach(function(responseHeader){
            if (responseHeader.name.toLowerCase() === "set-cookie") {
                console.log("bg4 onHeadersReceived set-cookie AAA "+responseHeader.value+"    tabId : "+details.tabId+"  detail.url "+details.url);
                responseHeader.value = processCookyReceived(responseHeader.value,details.tabId);
                console.log("bg4 onHeadersReceived set-cookie BBB "+responseHeader.value);
            }
        });
        return {
            responseHeaders: details.responseHeaders
        };
    }, {
        urls: ["*://*/*"]
    }, ['blocking','responseHeaders', 'extraHeaders']
);