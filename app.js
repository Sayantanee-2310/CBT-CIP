document.addEventListener("DOMContentLoaded", function() {
    const createEventBtn = document.getElementById('createEventBtn');
    const eventFormModal = document.getElementById('eventFormModal');
    const closeBtn = document.getElementById('closeBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const eventForm = document.getElementById('eventForm');
    const searchBar = document.getElementById('searchBar');
    const eventCardsContainer = document.getElementById('eventCardsContainer');

    let events = [];

    // Open event form modal
    createEventBtn.addEventListener('click', () => {
        eventFormModal.classList.remove('hidden');
    });

    // Close event form modal
    closeBtn.addEventListener('click', () => {
        eventFormModal.classList.add('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        eventFormModal.classList.add('hidden');
    });

    // Handle form submission
    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('eventName').value;
        const date = new Date(document.getElementById('eventDate').value);
        const location = document.getElementById('eventLocation').value;
        const description = document.getElementById('eventDescription').value;

        const newEvent = {
            name: name,
            date: date,
            location: location,
            description: description,
        };

        events.push(newEvent);
        eventFormModal.classList.add('hidden');
        eventForm.reset();
        displayEvents();
    });

    // Display events
    function displayEvents() {
        eventCardsContainer.innerHTML = '';
        events.sort((a, b) => a.date - b.date);

        events.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('event-card');
            card.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date.toLocaleString()}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p class="event-details">${event.description}</p>
                <button class="btn">View Details</button>
            `;
            eventCardsContainer.appendChild(card);
        });
    }

    // Search Events
    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredEvents = events.filter(event => event.name.toLowerCase().includes(searchTerm));
        displayFilteredEvents(filteredEvents);
    });

    function displayFilteredEvents(filteredEvents) {
        eventCardsContainer.innerHTML = '';
        filteredEvents.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('event-card');
            card.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date.toLocaleString()}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p class="event-details">${event.description}</p>
                <button class="btn">View Details</button>
            `;
            eventCardsContainer.appendChild(card);
        });
    }
});
