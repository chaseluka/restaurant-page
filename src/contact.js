const contactLoad = (() => {
  const content = document.getElementById("content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const contactUs = document.createElement("div");
  contactUs.classList.add("contact-us");
  contactUs.textContent = "Contact Us";
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const location = document.createElement("div");
  location.textContent = "9622 Scarn Ave Scranton, Pennsylvania";
  const phone = document.createElement("div");
  phone.textContent = "1-800-CEREALS";
  const email = document.createElement("div");
  email.textContent = "mikescerealshack@dundermiflin.com";

  const aboutOwner = document.createElement("div");
  aboutOwner.classList.add("about-owner");
  aboutOwner.textContent = "About the Owner";
  const aboutInfo = document.createElement("div");
  aboutInfo.classList.add("about-info");

  const aboutText = document.createElement("div");
  aboutText.classList.add("about-text");
  aboutText.textContent =
    "Michael has always wanted to own a restaurant to connect with others, but he hasn't ever been able to cook. His solution: provide what others have already made! Between his time as regional manager at Dunder Miflin and Mike's Cereal Shack, Michael is able to connect with others more than ever. And maybe one day, he just might own that yacht.";
  const image = document.createElement("img");
  image.src = "./images/michael.jpg";

  const contactAppend = () => {
    content.style.cssText = "background-image: none;";
    const contact = document.getElementById("contact");
    contact.appendChild(contactContainer);
    contact.appendChild(aboutContainer);
    contactContainer.appendChild(contactUs);
    contactContainer.appendChild(contactInfo);
    contactInfo.appendChild(location);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);
    aboutContainer.appendChild(aboutOwner);
    aboutContainer.appendChild(aboutInfo);
    aboutInfo.appendChild(aboutText);
    aboutInfo.appendChild(image);
  };
  return { contactAppend };
})();

export { contactLoad };
