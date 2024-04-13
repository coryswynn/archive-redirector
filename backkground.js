chrome.runtime.onInstalled.addListener(() => {
    const defaultSettings = {
        "nytimes.com": true,
        "barrons.com": true,
        "fortune.com": true,
        "wsj.com": true,
        "bloomberg.com": true,
        "economist.com": true
    };
    chrome.storage.local.set(defaultSettings);
});
