
console.log('auto-archive: archive_modify.js loaded')
console.log('auto-archive: hash=', location.hash)

// load latest archive, if exists
if (location.hash == '#archive-load') {
	console.log('auto-archive: Checking if archive exists')
	var as = document.querySelectorAll('div.THUMBS-BLOCK div a')
	if (as.length === 0) {
		console.log('auto-archive: no archive, initiating archive process')
		var url = location.href.replace(/^https?:\/\/[^/]*\//,'').split('#')[0]
		location.href = 'https://archive.ph?url=' + url + '#archive-create'
	} else {
		// click last archive
		as[as.length-1].click()
	}

// create, click save
} else if(location.hash == '#archive-create') {
	console.log('auto-archive: clicking save to create archive')
	document.querySelector('input[type="submit"][value="save"]').click()
}

// Function to check the URL and modify it if necessary
function checkAndModifyUrl() {
    const currentUrl = window.location.href;
    if (currentUrl !== 'https://archive.ph/' && currentUrl !== 'https://archive.ph/faq' && !currentUrl.includes('https://archive.ph/https') && !currentUrl.includes('https://archive.ph/search/') && !currentUrl.endsWith('/embed') && !currentUrl.includes('/wip/') && !currentUrl.includes('/submit/') && !currentUrl.includes('?run=1') && !currentUrl.includes('?url=')) {

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
