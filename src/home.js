import teacup from "./teacup.png"

export default function homePage() {
  let textContainer = document.createElement("div");
  textContainer.classList.add("container");

  let row1 = document.createElement("div");
  let row2 = document.createElement("div");
  let row3 = document.createElement("div");
  let row4 = document.createElement("div");

  row1.classList.add("row");
  row2.classList.add("row");
  row3.classList.add("row");
  row4.classList.add("row");

  let heading = document.createElement("h1");
  heading.innerHTML = "Hatter\'s Mad Tea";
  row1.appendChild(heading);

  let teaPhoto = document.createElement("img");
  teaPhoto.src = teacup;

  let testimonial = document.createElement("p");
  testimonial.innerHTML = "Perfect for all sorts of events! Hatter\'s Mad Tea is so good it will drive you crazy. If you get the chance, definately make a reservation and stop in for one of their world famous tea parties. You\'ll never feel like you are in wonderland."

  let testimonialName = document.createElement("p");
  testimonialName.innerHTML = "Alice";

  row2.appendChild(teaPhoto);
  row2.appendChild(testimonial);
  row2.appendChild(testimonialName);

  let hours = document.createElement("h2");
  hours.innerHTML = "Hours";

  let sunday = document.createElement("p");
  let monday = document.createElement("p");
  let tuesday = document.createElement("p");
  let wednesday = document.createElement("p");
  let thursday = document.createElement("p");
  let friday = document.createElement("p");
  let saturday = document.createElement("p");

  sunday.innerHTML = "Sunday: 8am - 8pm";
  monday.innerHTML = "Monday: 6am - 6pm";
  tuesday.innerHTML = "Tuesday: 6am - 6pm";
  wednesday.innerHTML = "Wednesday: 6am - 6pm";
  thursday.innerHTML = "Thursday: 6am - 10pm";
  friday.innerHTML = "Friday: 6am - 10pm";
  saturday.innerHTML = "Saturday: 8am - 10pm";

  row3.appendChild(hours);
  row3.appendChild(sunday);
  row3.appendChild(monday);
  row3.appendChild(tuesday);
  row3.appendChild(wednesday);
  row3.appendChild(thursday);
  row3.appendChild(friday);
  row3.appendChild(saturday);

  let location = document.createElement("h2");
  location.innerHTML = "Location";

  let address = document.createElement("p");
  address.innerHTML = "123 Hatter Lane, Foresttonne, Wonderland";

  row4.appendChild(location);
  row4.appendChild(address);

  textContainer.appendChild(row1);
  textContainer.appendChild(row2);
  textContainer.appendChild(row3);
  textContainer.appendChild(row4);

  return textContainer;
}