document.addEventListener('DOMContentLoaded', function() {
    // Function to get query parameters from the URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Check if the form submission was successful
    const status = getQueryParam('status');
    
    if (status === 'success') {
        // Show the popup
        const popup = document.getElementById('popup');
        popup.style.display = 'block';

        // Close button event
        document.querySelector('.close').addEventListener('click', function() {
            popup.style.display = 'none';
            // Optionally, clear the URL parameter
            window.history.replaceState({}, document.title, window.location.pathname);
        });
    }
});
