const currentUrl = window.location.href;

// Remove any existing hash from the URL to avoid interference
const cleanUrl = currentUrl.split('#')[0];

// Check Chrome storage to see if redirection is enabled for the domain
chrome.storage.local.get(null, data => {
    const sites = Object.keys(data).filter(site => data[site]);
    const siteEnabled = sites.find(site => cleanUrl.includes(site) && data[site] !== false);

    if (siteEnabled) {
        // Define the new URL patterns for more specific site matching
        const patterns = [
            /^(https:\/\/www.bloomberg.com\/news\/[^?#]*)/,
            /^(https:\/\/www.forbes.com\/sites\/[^?#]*)/,
            /^(https:\/\/foreignpolicy.com\/\\d{4}\/\\d{2}\/\\d{2}\/.*?\/)/,
            /^(https:\/\/www.nytimes.com\/.*\.html)/,
            /^(https:\/\/www.economist.com\/.+)$/,
            /^(https:\/\/www.latimes.com\/.+)$/,
            /^(https:\/\/*.theathletic.com\/.+)$/,
            /^(https:\/\/www.washingtonpost.com\/.*\/)/,
            /^(https:\/\/www.wsj.com\/articles\/[^?#]*)/
        ];

        // Check each pattern to see if it matches the current URL
        const siteToRedirect = patterns.find(pattern => cleanUrl.match(pattern));

        if (siteToRedirect) {
            const matchedUrl = cleanUrl.match(siteToRedirect)[1];
            // Construct the URL for the archive page
            const archiveUrl = `https://archive.ph/${matchedUrl}#archive-load`;
            window.location.replace(archiveUrl);
        } else {
            console.log('URL does not match any specified patterns.');
        }
    } else {
        console.log('Redirection for this site is not enabled or site is not specified.');
    }
});
