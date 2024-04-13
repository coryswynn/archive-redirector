const currentUrl = window.location.href;

chrome.storage.local.get(null, data => {
    const sites = ["nytimes.com", "barrons.com", "fortune.com", "wsj.com", "bloomberg.com", "economist.com"];
    const siteToRedirect = sites.find(site => currentUrl.includes(site) && data[site] !== false);
    if (siteToRedirect) {
        const archiveUrl = `http://archive.today/?run=1&url=${encodeURIComponent(currentUrl)}`;
        window.location.replace(archiveUrl);
    }
});
