const sites = ["nytimes.com", "barrons.com", "fortune.com", "wsj.com", "bloomberg.com"];
const currentUrl = window.location.href;

if (sites.some(site => currentUrl.includes(site))) {
    const archiveUrl = `http://archive.today/?run=1&url=${encodeURIComponent(currentUrl)}`;
    window.location.replace(archiveUrl);
}
