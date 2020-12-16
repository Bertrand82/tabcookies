chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
		console.log("onBeforeSendHeaders frameId :"+details.frameId+"     parentFrameId "+details.parentFrameId+"    tabId : "+details.tabId);
        details.requestHeaders.forEach(function(requestHeader){
            if (requestHeader.name.toLowerCase() === "cookie") {
                requestHeader.value = processCookyBeforeSend(requestHeader.value,details.frameId);
            }
        });
        return {
            requestHeaders: details.requestHeaders
        };
    }, {
        urls: [ "*://*/*" ]
    }, ['blocking', 'requestHeaders']
);

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
		details.responseHeaders.forEach(function(responseHeader){
            if (responseHeader.name.toLowerCase() === "set-cookie") {
                responseHeader.value = processCookyReceived(responseHeader.value,details.frameId);
            }
        });
        return {
            responseHeaders: details.responseHeaders
        };
    }, {
        urls: ["*://*/*"]
    }, ['blocking','responseHeaders']
);