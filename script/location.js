document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.getElementById('menu-bar');
    const nav = document.querySelector('nav ul.navbar');

    // Add event listener to toggle navigation menu
    menuBar.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Fetch destination data from JSON and populate the page
    fetch('./destination.json')
        .then(response => response.json())
        .then(data => {
            const destination = data.destinations.find(dest => dest.name === "LANDSCAPES OF KARNATAKA");

            document.getElementById('destination-image').src = destination.image;
            document.getElementById('destination-name').innerText = destination.name;
            document.getElementById('destination-description').innerText = destination.description;
            document.getElementById('destination-info').innerText = `
                ${destination.details.description}
                Days: ${destination.details.days}
                From: ${destination.details.from}
                Includes: ${destination.details.includes}
                Excludes: ${destination.details.excludes}
                Booking procedure: ${destination.details.bookingProcedure}
                Tour Cost: Rs. ${destination.details.tourCost}
            `;

            let itineraryHtml = '';
            destination.itinerary.forEach(day => {
                itineraryHtml += `
                    <h3>${day.title}</h3>
                    <p>${day.description}</p>
                `;
            });
            document.getElementById('itinerary-content').innerHTML = itineraryHtml;

            document.getElementById('includes').innerHTML = `<h3>Includes</h3><ul>${destination.includesDetails.map(item => `<li>${item}</li>`).join('')}</ul>`;
            document.getElementById('excludes').innerHTML = `<h3>Excludes</h3><ul>${destination.excludesDetails.map(item => `<li>${item}</li>`).join('')}</ul>`;

            // Populate gallery section
            const galleryContainer = document.getElementById('gallery');
            const galleryImages = destination.gallery;

            galleryImages.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                galleryContainer.appendChild(img);
            });
        });
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Display the default tab
document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('tablinks')[0].click();
});
