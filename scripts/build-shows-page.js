const API_KEY = "6c6a385-85a5-4d2a-9747-5e485843c624";

const bandSite = new BandSiteApi(API_KEY);
console.log(bandSite);

// Shows Section:

async function getShows() {
  try {
    const shows = await bandSite.getShows();
    console.log("Shows:", shows);
    displayShows(shows);
  } catch (error) {
    console.error("Failed to fetch shows:", error);
  }
}

getShows();

function displayShows(arr) {
  const shows = document.querySelector(".shows");

  const showsTitle = document.createElement("h2");
  showsTitle.classList.add("shows__title");
  showsTitle.innerText = "Shows";
  shows.appendChild(showsTitle);

  const showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container");
  shows.appendChild(showsContainer);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("shows__top");
  showsContainer.appendChild(infoDiv);

  const datesTitle = document.createElement("h3");
  datesTitle.classList.add("shows__top-date");
  datesTitle.innerText = "DATES";
  infoDiv.appendChild(datesTitle);

  const venuesTitle = document.createElement("h3");
  venuesTitle.classList.add("shows__top-venue");
  venuesTitle.innerText = "VENUE";
  infoDiv.appendChild(venuesTitle);

  const locationsTitle = document.createElement("h3");
  locationsTitle.classList.add("shows__top-location");
  locationsTitle.innerText = "LOCATION";
  infoDiv.appendChild(locationsTitle);

  const hiddenEle = document.createElement("span");
  hiddenEle.classList.add("shows__hidden");
  hiddenEle.innerText = ".";
  infoDiv.appendChild(hiddenEle);

  for (let key in arr) {
    //container div
    const showsParent = document.createElement("div");
    showsParent.classList.add("shows__new");
    showsContainer.appendChild(showsParent);

    //Date
    const dateTitle = document.createElement("h4");
    dateTitle.classList.add("shows__date");
    dateTitle.innerText = "DATE";
    showsParent.appendChild(dateTitle);

    //Actual Date
    const dateShow = document.createElement("h3");
    dateShow.classList.add("shows__date-actual");
    const date = new Date(arr[key]["date"]).toDateString();
    console.log(date);
    dateShow.innerText = date;
    showsParent.appendChild(dateShow);

    //Venue
    const venueTitle = document.createElement("h4");
    venueTitle.classList.add("shows__venue");
    venueTitle.innerText = "VENUE";
    showsParent.appendChild(venueTitle);

    //Actual Venue
    const venueShow = document.createElement("h3");
    venueShow.classList.add("shows__venue-actual");
    venueShow.innerText = arr[key]["place"];
    showsParent.appendChild(venueShow);

    //Location
    const locationTitle = document.createElement("h4");
    locationTitle.classList.add("shows__location");
    locationTitle.innerText = "LOCATION";
    showsParent.appendChild(locationTitle);

    //Actual Location
    const locationShow = document.createElement("h3");
    locationShow.classList.add("shows__location-actual");
    locationShow.innerText = arr[key]["location"];
    showsParent.appendChild(locationShow);

    //Button
    const buyTickets = document.createElement("button");
    buyTickets.classList.add("shows__button");
    buyTickets.innerText = "BUY TICKETS";
    showsParent.appendChild(buyTickets);
  }
}

// displayShows(arr);
