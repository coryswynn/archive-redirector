const sites = ["nytimes.com", "barrons.com", "fortune.com", "wsj.com", "bloomberg.com", "economist.com"];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('siteToggles');
    sites.forEach(site => {
        chrome.storage.local.get(site, data => {
            const checked = data[site] !== false; // Default to checked
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = site;
            checkbox.checked = checked;
            checkbox.onchange = () => chrome.storage.local.set({[site]: checkbox.checked});
            
            const label = document.createElement('label');
            label.textContent = site;
            label.appendChild(checkbox);
            
            container.appendChild(label);
        });
    });
});
