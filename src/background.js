const urlInjectScript = chrome.runtime.getURL('injectScript.js');
const urlCommonScript = chrome.runtime.getURL('common.js');
console.log("Start urlInjectScript ", urlInjectScript);
console.log("Start urlCommonScript ", urlCommonScript);
var injectScript;
var commonScript;

fetch(urlInjectScript).then(function (response) {
    return response.text();
}).then(function (text) {
    console.log("Start injectScript11 text ::::", text)
    injectScript = text;
});


fetch(urlCommonScript).then(function (response) {
    return response.text();
}).then(function (text) {
    console.log("Start urlCommonScript text ::::", text)
    commonScript = text;
});


chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        details.requestHeaders.forEach(function (requestHeader) {
            if (requestHeader.name.toLowerCase() === "cookie") {
                console.log("bg33 onBeforeSendHeaders cookie " + requestHeader.value + "    tabId : " + details.tabId + "  detail.url : " + details.url)
                requestHeader.value = processCookyBeforeSend(requestHeader.value, details.tabId);
                console.log("bg34 onBeforeSendHeaders cookie " + requestHeader.value + "    tabId : " + details.tabId + "  detail.url : " + details.url)
            }
        });
        return {
            requestHeaders: details.requestHeaders
        };
    }, {
    urls: ["*://*/*"]
}, ['blocking', 'requestHeaders', 'extraHeaders']
);

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        details.responseHeaders.forEach(function (responseHeader) {
            if (responseHeader.name.toLowerCase() === "set-cookie") {
                responseHeader.value = processCookyReceived(responseHeader.value, details.tabId);
            }
        });
        return {
            responseHeaders: details.responseHeaders
        };

    }, {
    urls: ["*://*/*"]
}, ['blocking', 'responseHeaders', 'extraHeaders']
);
/*
Decomment this code if page are using cookies . It try to override set and get cookies function 
*/
/*
chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        console.log("bg72 oncompleted start 1 details.tabId : " + details.tabId);
        if (details.tabId >= 0) {
            var injectScriptCustom = injectScript.replace("1xxBGxx1", details.tabId);
            
            chrome.tabs.executeScript(details.tabId, { code: commonScript }, function () {
                console.log("bg73 executeScript  Executed commonScript "); // Notification on Completion
            });
            chrome.tabs.executeScript(details.tabId, { code: injectScriptCustom }, function () {
                console.log("bg74 executeScript  Executed injectScriptCustom "); // Notification on Completion
            });

        }
        console.log("bg75 oncompleted done");

    },
    {
        urls: [<all_urls>]
    },
    ['responseHeaders']
);
*/




chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("BINGO2  from a content script:", sender);
        // sendResponse({ farewell: "goodbyeBG" });
        return true;
    });

