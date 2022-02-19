"use strict";
// day // month // date // year
const dateConverter = function (tStamp) {
  const dateNum = new Date(Number(tStamp)).toDateString();
  return dateNum;
};
const tableTicketWrapper = document.querySelector(".table__ticket-wrapper");
const createTickets = function (arr) {
  arr.forEach((k) => {
    // ticket container
    const ticket = document.createElement("div");
    ticket.classList.add("ticket");
    //label
    const dateLabel = document.createElement("p");
    dateLabel.classList.add("ticket__label", "label");
    dateLabel.textContent = "Date";
    // ticket date
    const ticketDate = document.createElement("h3");
    ticketDate.textContent = dateConverter(k.date);
    ticketDate.classList.add("ticket__date");
    //label
    const venueLabel = document.createElement("p");
    venueLabel.classList.add("ticket__label", "label");
    venueLabel.textContent = "Venue";
    // ticket__name
    const ticketName = document.createElement("h3");
    ticketName.textContent = k.place;
    ticketName.classList.add("ticket__name");
    //label
    const locationLabel = document.createElement("p");
    locationLabel.classList.add("ticket__label", "label");
    locationLabel.textContent = "Location";
    //ticket place
    const ticketPlace = document.createElement("h3");
    ticketPlace.textContent = k.location;
    ticketPlace.classList.add("ticket__place");
    // ticket button
    const ticketBtn = document.createElement("a");
    ticketBtn.textContent = "Buy Ticket";
    ticketBtn.classList.add("ticket__btn", "btn");
    ticketBtn.setAttribute(
      "href",
      "https://www.ticketmaster.ca/dermot-kennedy-tickets/artist/2089473"
    );
    ticket.addEventListener("click", function (e) {
      const tickets = document.querySelectorAll(".ticket");
      tickets.forEach((ticketObj) => {
        ticketObj.classList.remove("ticket__active");
      });
      e.currentTarget.classList.add("ticket__active");
    });
    ticket.appendChild(dateLabel);
    ticket.appendChild(ticketDate);
    ticket.appendChild(venueLabel);
    ticket.appendChild(ticketName);
    ticket.appendChild(locationLabel);
    ticket.appendChild(ticketPlace);
    ticket.appendChild(ticketBtn);
    tableTicketWrapper.appendChild(ticket);
  });
};

const apiKey = "bfd24036-23f8-495b-8f78-dedeae8232ea";
axios
  .get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
  .then((response) => createTickets(response.data))
  .catch((error) => console.log(error));
