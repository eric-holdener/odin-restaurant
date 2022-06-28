export default function menuPage() {
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

  let menuHeading = document.createElement("h1");
  menuHeading.innerHTML = "Our Menu";

  row1.appendChild(menuHeading);

  let beveragesHeading = document.createElement("h2");
  beveragesHeading.innerHTML = "Refreshing Drinks";

  let bevCard1 = document.createElement("div");
  let bevHead1 = document.createElement("h3");
  bevHead1.innerHTML = "Mad Maple Tea";
  let bevText1 = document.createElement("p");
  bevText1.innerHTML = "A warm tea infused with maple from the most exotic trees in wonderland. Perfect for a comfy start to your day!";
  let bevPrice1 = document.createElement("p");
  bevPrice1.innerHTML = "$3";
  let bevImg1 = document.createElement("img");
  // bevImg1.src = xxx
  bevCard1.appendChild(bevHead1);
  bevCard1.appendChild(bevText1);
  bevCard1.appendChild(bevPrice1);
  bevCard1.appendChild(bevImg1);

  let bevCard2 = document.createElement("div");
  let bevHead2 = document.createElement("h3");
  bevHead2.innerHTML = "Hoppin Hatter Tea";
  let bevText2 = document.createElement("p");
  bevText2.innerHTML = "A cool, refreshing tea that will get you hopping with energy! Our owner\'s personal recommendation.";
  let bevPrice2 = document.createElement("p");
  bevPrice2.innerHTML = "$2";
  let bevImg2 = document.createElement("img");
  // bevImg2.src = xxx
  bevCard2.appendChild(bevHead2);
  bevCard2.appendChild(bevText2);
  bevCard2.appendChild(bevPrice2);
  bevCard2.appendChild(bevImg2);

  row2.appendChild(beveragesHeading);
  row2.appendChild(bevCard1);
  row2.appendChild(bevCard2);

  textContainer.appendChild(row1);
  textContainer.appendChild(row2);
  textContainer.appendChild(row3);
  textContainer.appendChild(row4);

  return textContainer;
}