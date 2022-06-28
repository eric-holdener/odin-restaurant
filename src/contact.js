export default function contactPage() {
  let contactContainer = document.createElement("div");

  let row1 = document.createElement("div");

  let contactHead = document.createElement("h1");
  contactHead.innerHTML = "Contact Us";

  let contactCard = document.createElement("div");

  let contactName = document.createElement("h2");
  contactName.innerHTML = "The Mad Hatter";

  let contactTitle = document.createElement("p");
  contactTitle.innerHTML = "Owner and Proprieter";

  let contactPhone = document.createElement("p");
  contactPhone.innerHTML = "555-555-5555";
  
  let contactEmail = document.createElement("p");
  contactEmail.innerHTML = "definetlyreal@notfake.com";

  contactCard.appendChild(contactName);
  contactCard.appendChild(contactTitle);
  contactCard.appendChild(contactPhone);
  contactCard.appendChild(contactEmail);

  row1.appendChild(contactHead);
  row1.appendChild(contactCard);

  contactContainer.appendChild(row1);

  return contactContainer
}