chrome.runtime.onInstalled.addListener(() => {
    const defaultSettings = {
        "bloomberg.com": true,
        "economist.com": true,
        "forbes.com": true,
        "fortune.com": true,
        "foreignpolicy.com": true,
        "latimes.com": true,
        "nytimes.com": true,
        "theathletic.com": true,
        "washingtonpost.com": true,
        "wsj.com": true
    };
    chrome.storage.local.set(defaultSettings);
});
