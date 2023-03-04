/**
 * @module
 * @name Scripts
 * @description - It hold all the scripts for the website.
 */

import "./assets/styles/main.scss";
import { MY_WORKS } from "./assets/scripts/data";

/**
 * It loads all the functions that will run after the page is fully loaded.
 * @event
 */
window.addEventListener("load", () => {
  let windowHeight = window.innerHeight;
  const divHomeEl = document.getElementById("home");
  const divAboutEl = document.getElementById("about");
  const divWorksEl = document.getElementById("works");
  const divContactEl = document.getElementById("contact");
  const btnSendMessageEl = document.getElementById("btnSendMessage");
  const slideShowWorksEl = document.getElementById("slide-show-works");

  addEventListener("resize", (evt) => {
    windowHeight = window.innerHeight;
    updateNavBar();
  });

  window.addEventListener("scroll", (evt) => {
    windowHeight = window.innerHeight;
    updateNavBar();
  });

  function updateNavBar() {
    const divHomeOffsets = divHomeEl.getBoundingClientRect();
    const divAboutOffsets = divAboutEl.getBoundingClientRect();
    const divWorksOffsets = divWorksEl.getBoundingClientRect();
    const divContactOffsets = divContactEl.getBoundingClientRect();

    if (
      divHomeOffsets.top < windowHeight / 2 &&
      divHomeOffsets.height + divHomeOffsets.top > divHomeOffsets.height / 2
    ) {
      activateNavbarItem("home");
    } else if (
      divAboutOffsets.top < windowHeight / 2 &&
      divAboutOffsets.height + divAboutOffsets.top > divAboutOffsets.height / 2
    ) {
      activateNavbarItem("about");
    } else if (
      divWorksOffsets.top < windowHeight / 2 &&
      divWorksOffsets.height + divWorksOffsets.top > divWorksOffsets.height / 2
    ) {
      activateNavbarItem("works");
    } else if (
      divContactOffsets.top < windowHeight / 2 &&
      divContactOffsets.height + divContactOffsets.top >
        divContactOffsets.height / 2
    ) {
      activateNavbarItem("contact");
    }
  }

  function activateNavbarItem(itemId) {
    const navbarItemsSide =
      document.getElementsByClassName("w3-bar-item__side");
    const navbarItemsTop = document.getElementsByClassName("w3-bar-item__top");

    for (let i = 0; i < navbarItemsSide.length; i++) {
      const navbarItemId = navbarItemsSide[i].href.split("#")[1];
      if (navbarItemId === itemId) {
        navbarItemsSide[i].classList.add("w3-black");
        navbarItemsSide[i].classList.remove("w3-hover-black");
      } else {
        navbarItemsSide[i].classList.remove("w3-black");
        navbarItemsSide[i].classList.add("w3-hover-black");
      }
    }

    for (let i = 0; i < navbarItemsTop.length; i++) {
      const navbarItemId = navbarItemsTop[i].href.split("#")[1];
      if (navbarItemId === itemId) {
        navbarItemsTop[i].classList.add("navbar-items__top--active");
        navbarItemsTop[i].classList.remove("navbar-items__top--deactive");
      } else {
        navbarItemsTop[i].classList.remove("navbar-items__top--active");
        navbarItemsTop[i].classList.add("navbar-items__top--deactive");
      }
    }
  }

  // Init slides
  /**
   * Initialize all my works
   * @function
   */
  function initWorks() {
    for (let i = 0; i < MY_WORKS.length; i++) {
      const worksItemEl = generateWorkItem(MY_WORKS[i]);

      slideShowWorksEl.append(worksItemEl);
      if (MY_WORKS[i].screenShots) {
        w3.slideshow("." + MY_WORKS[i]._id + "-carousel", 2500);
      }
    }

    const btnPrevEl = document.createElement("button");
    const btnNextEl = document.createElement("button");

    btnPrevEl.classList.add("w3-button", "w3-black", "w3-display-left");
    btnNextEl.classList.add("w3-button", "w3-black", "w3-display-right");

    btnPrevEl.innerHTML = "&#10094;";
    btnNextEl.innerHTML = "&#10095;";

    const myWorksSlideShow = w3.slideshow(".works-item", 15000);

    btnPrevEl.addEventListener("click", () => {
      myWorksSlideShow.previous();
    });
    btnNextEl.addEventListener("click", () => {
      myWorksSlideShow.next();
    });

    slideShowWorksEl.append(btnPrevEl);
    slideShowWorksEl.append(btnNextEl);
  }

  /**
   * Generates each work item
   * @function
   * @param {object} workItem
   * @returns {HTMLDivElement}
   */
  function generateWorkItem({
    _id,
    title,
    description,
    screenShots,
    techUsed,
    links,
  }) {
    const divWorkItemEl = document.createElement("div");
    const txtWorkItemTitleEl = document.createElement("h3");
    const lineDividerEl = document.createElement("hr");
    const lineDivider2El = document.createElement("hr");

    const txtWorkItemDescriptionEl = document.createElement("p");
    const divClearEl = document.createElement("div");

    txtWorkItemTitleEl.textContent = title;
    txtWorkItemTitleEl.classList.add("works-item__title");
    txtWorkItemDescriptionEl.textContent = description;
    txtWorkItemDescriptionEl.classList.add("works-item__description");
    lineDividerEl.classList.add("w3-opacity");
    lineDivider2El.classList.add("w3-opacity");
    divClearEl.classList.add("clearfix");

    divWorkItemEl.classList.add("works-item");
    divWorkItemEl.append(txtWorkItemTitleEl);
    divWorkItemEl.append(lineDividerEl);
    divWorkItemEl.append(txtWorkItemDescriptionEl);

    if (screenShots) {
      divWorkItemEl.append(generateCarouselItem(_id, screenShots));
    }

    divWorkItemEl.append(generateListItems(techUsed));
    divWorkItemEl.append(lineDivider2El);
    divWorkItemEl.append(generateLinks(links));

    divWorkItemEl.append(divClearEl);

    return divWorkItemEl;
  }

  /**
   * Generates a div of items acts as a carousel
   * @function
   * @param {string} _id
   * @param {string[]} images
   * @returns {HTMLDivElement}
   */
  function generateCarouselItem(_id, images) {
    const divCarouselEl = document.createElement("div");
    for (let i = 0; i < images.length; i++) {
      const imgWorkItemPhotoEl = document.createElement("img");
      imgWorkItemPhotoEl.src = images[i];
      imgWorkItemPhotoEl.classList.add(
        "works-item__image",
        _id + "-carousel",
        "w3-animate-opacity",
        "w3-image",
        "w3-round"
      );

      divCarouselEl.append(imgWorkItemPhotoEl);
    }

    return divCarouselEl;
  }

  /**
   * Generates a list of items
   * @function
   * @param {string[]} items
   * @returns {HTMLUListElement}
   */
  function generateListItems(items) {
    const ulEl = document.createElement("ul");
    ulEl.classList.add("works-item__techUsed");
    ulEl.innerText = "Technologies Used";

    for (let i = 0; i < items.length; i++) {
      const liEl = document.createElement("li");
      liEl.innerText = items[i];
      liEl.classList.add("works-item__techUsed");

      ulEl.append(liEl);
    }

    return ulEl;
  }

  /**
   * Generates a div including all links provided
   * @function
   * @param {string[]} items
   * @returns {HTMLDivElement}
   */
  function generateLinks(items) {
    const divLinksEl = document.createElement("div");
    divLinksEl.classList.add("works-item__links");
    divLinksEl.textContent = "Useful links";

    for (let i = 0; i < items.length; i++) {
      const hyperLinkEl = document.createElement("a");
      if (items[i].title === "Source code") {
        hyperLinkEl.innerText = "💻️";
      } else if (items[i].title === "Website") {
        hyperLinkEl.innerText = "🔗";
      } else if (items[i].title === "Documentation") {
        hyperLinkEl.innerText = "📋️";
      } else if (items[i].title === "Video") {
        hyperLinkEl.innerText = "📽️";
      }
      hyperLinkEl.title = items[i].title;
      hyperLinkEl.href = items[i].href;
      hyperLinkEl.setAttribute("target", "_blank");
      hyperLinkEl.setAttribute("rel", "noopener noreferrer");

      divLinksEl.append(hyperLinkEl);
    }

    return divLinksEl;
  }

  btnSendMessageEl.addEventListener("click", (evt) => {
    // evt.preventDefault();
    // console.log(formContactEl);
  });

  initWorks();
  updateNavBar();
});
