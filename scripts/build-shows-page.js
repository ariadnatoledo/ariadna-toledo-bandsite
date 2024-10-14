document.addEventListener("DOMContentLoaded", function () {
  const arrDates = [
    {
      date: "Mon Sept 09 2024",
      venue: "Ronald Lane",
      location: "San Francisco, CA",
    },
    {
      date: "Tue Sept 17 2024",
      venue: "Pier 3 East",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Oct 12 2024",
      venue: "View Lounge",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Nov 16 2024",
      venue: "Hyatt Agency",
      location: "San Francisco, CA",
    },
    {
      date: "Fri Nov 29 2024",
      venue: "Moscow Center",
      location: "San Francisco, CA",
    },
    {
      date: "Wed Dec 18 2024",
      venue: "Pres Club",
      location: "San Francisco, CA",
    },
  ];

  function displayShows(arr) {
    const shows = document.querySelector(".shows");

    const showsTitle = document.createElement("h2");
    showsTitle.classList.add("shows__title");
    showsTitle.innerText = "Shows";
    shows.appendChild(showsTitle);

    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");
    shows.appendChild(showsContainer);

    const headerRow = document.createElement("div");
    headerRow.classList.add("shows__header");
    showsContainer.appendChild(headerRow);

    const headers = ["DATE", "VENUE", "LOCATION"];
    headers.forEach((header) => {
      const headerElement = document.createElement("h4");
      headerElement.classList.add(`shows__${header.toLowerCase()}`);
      headerElement.innerText = header;
      headerRow.appendChild(headerElement);
    });

    const emptyHeader = document.createElement("div");
    headerRow.appendChild(emptyHeader);

    for (let key in arr) {
      //container div
      const showsParent = document.createElement("div");
      showsParent.classList.add("shows__new");
      showsContainer.appendChild(showsParent);

      //Date
      const dateShow = document.createElement("h3");
      dateShow.classList.add("shows__date-actual");
      dateShow.innerText = arr[key].date;
      showsParent.appendChild(dateShow);

      //Venue
      const venueShow = document.createElement("h3");
      venueShow.classList.add("shows__venue-actual");
      venueShow.innerText = arr[key].venue;
      showsParent.appendChild(venueShow);

      //Location
      const locationShow = document.createElement("h3");
      locationShow.classList.add("shows__location-actual");
      locationShow.innerText = arr[key].location;
      showsParent.appendChild(locationShow);

      //Button
      const buyTickets = document.createElement("button");
      buyTickets.classList.add("shows__button");
      buyTickets.innerText = "BUY TICKETS";
      showsParent.appendChild(buyTickets);
    }
  }

  displayShows(arrDates);
});
