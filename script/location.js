// Function to open tabs
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to fetch destination details from destination.json
function fetchDestinationDetails(destinationName) {
    fetch('./destination.json')
        .then(response => response.json())
        .then(data => {
            // Find the destination details by name
            const destination = data.destinations.find(dest => dest.name === destinationName);
            if (destination) {
                // Update destination image and content
                document.getElementById('destination-image').src = destination.image;
                document.getElementById('destination-name').textContent = destination.name;
                document.getElementById('destination-description').textContent = destination.description;
                document.getElementById('destination-info').textContent = destination.information;
                // You can similarly update other tab contents
            }
        })
        .catch(error => console.error('Error fetching destination details:', error));
}

// Call fetchDestinationDetails function when the page loads
window.onload = function() {
    // Get the destination name from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const destinationName = urlParams.get('destination');
    if (destinationName) {
        // Fetch and display details of the selected destination
        fetchDestinationDetails(destinationName);
    }
};
