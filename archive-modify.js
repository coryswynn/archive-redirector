// Function to check the URL and modify it if necessary
function checkAndModifyUrl() {
    const currentUrl = window.location.href;
    if (!currentUrl.endsWith('/embed') && !currentUrl.includes('/wip/') && !currentUrl.includes('?run=1')) {
        const embedUrl = `${currentUrl}/embed`;
        window.location.replace(embedUrl);
    }
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(mutations => {
    checkAndModifyUrl();
});

// Start observing the document body for configured mutations
observer.observe(document.body, { childList: true, subtree: true });

// Also run the check on initial load
checkAndModifyUrl();
