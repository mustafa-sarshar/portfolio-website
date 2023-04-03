/**
 * @module
 * @name Scripts
 * @description - It hold all the scripts for the website.
 */

import "./assets/styles/main.scss";
import { MY_PROJECTS } from "./assets/scripts/data";

const CAROUSEL_WORK_ITEM_TIMEOUT_DURATION = 2500;
const CAROUSEL_WORKS_TIMEOUT_DURATION = 30000;

/**
 * It loads all the functions that will run after the page is fully loaded.
 * @event
 */
window.addEventListener("load", () => {
  let windowHeight = window.innerHeight;
  const appBodyEl = document.getElementById("app-body");
  // const btnToggleThemeEl = document.getElementById("btn-toggle-theme");
  const divHomeEl = document.getElementById("home");
  const divAboutEl = document.getElementById("about");
  const divProjectsEl = document.getElementById("projects");
  const divContactEl = document.getElementById("contact");
  const btnSendMessageEl = document.getElementById("btnSendMessage");
  const slideShowProjectsEl = document.getElementById("slide-show-projects");

  addEventListener("resize", (_) => {
    windowHeight = window.innerHeight;
    updateNavBar();
  });

  window.addEventListener("scroll", (_) => {
    windowHeight = window.innerHeight;
    updateNavBar();
  });

  // btnToggleThemeEl.addEventListener("click", (_) => {
  //   const theme = localStorage.getItem("theme") || null;
  //   if (theme === "light") {
  //     updateAppTheme("dark");
  //   } else {
  //     updateAppTheme("light");
  //   }
  // });

  // function updateAppTheme(theme) {
  //   if (theme === "dark") {
  //     appBodyEl.classList.remove("theme-reverse");
  //     localStorage.setItem("theme", "dark");
  //     btnToggleThemeEl.innerHTML = btnToggleThemeEl.textContent = "Light Mode";
  //     updatePageElementsThemeColor("dark");
  //     console.log("Theme Dark");
  //   } else {
  //     appBodyEl.classList.add("theme-reverse");
  //     localStorage.setItem("theme", "light");
  //     btnToggleThemeEl.innerHTML = btnToggleThemeEl.textContent = "Dark Mode";
  //     updatePageElementsThemeColor("light");
  //     console.log("Theme Light");
  //   }
  // }

  // function updatePageElementsThemeColor(theme) {
  //   const appElements = document.getElementsByClassName("w3-black");
  //   for (let i = 0; i < appElements.length; i++) {
  //     if (theme === "dark") {
  //       appElements[i].classList.remove("w3-white");
  //       appElements[i].classList.add("w3-black");
  //     } else {
  //       appElements[i].classList.remove("w3-black");
  //       appElements[i].classList.add("w3-white");
  //     }
  //   }
  // }

  function updateNavBar() {
    const divHomeOffsets = divHomeEl.getBoundingClientRect();
    const divAboutOffsets = divAboutEl.getBoundingClientRect();
    const divProjectsOffsets = divProjectsEl.getBoundingClientRect();
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
      divProjectsOffsets.top < windowHeight / 2 &&
      divProjectsOffsets.height + divProjectsOffsets.top >
        divProjectsOffsets.height / 2
    ) {
      activateNavbarItem("projects");
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
   * Initialize all my projects
   * @function
   */
  function initProjects() {
    for (let i = 0; i < MY_PROJECTS.length; i++) {
      const projectsItemEl = generateProjectItem(i, MY_PROJECTS[i]);

      slideShowProjectsEl.append(projectsItemEl);
      if (MY_PROJECTS[i].screenShots) {
        w3.slideshow(
          "." + MY_PROJECTS[i]._id + "-carousel",
          CAROUSEL_WORK_ITEM_TIMEOUT_DURATION
        );
      }
    }

    const btnPrevEl = document.createElement("button");
    const btnNextEl = document.createElement("button");

    btnPrevEl.classList.add("w3-button", "w3-black", "w3-display-left");
    btnNextEl.classList.add("w3-button", "w3-black", "w3-display-right");

    btnPrevEl.innerHTML = "&#10094;";
    btnNextEl.innerHTML = "&#10095;";

    const myProjectsSlideShow = w3.slideshow(
      ".projects-item",
      CAROUSEL_WORKS_TIMEOUT_DURATION
    );

    btnPrevEl.addEventListener("click", (_) => {
      myProjectsSlideShow.previous();
    });
    btnNextEl.addEventListener("click", (_) => {
      myProjectsSlideShow.next();
    });

    slideShowProjectsEl.append(btnPrevEl);
    slideShowProjectsEl.append(btnNextEl);
  }

  /**
   * Generates each work item
   * @function
   * @param {object} workItem
   * @returns {HTMLDivElement}
   */
  function generateProjectItem(
    itemIndex,
    { _id, title, description, screenShots, techUsed, links }
  ) {
    const divProjectItemEl = document.createElement("div");
    const txtProjectItemTitleEl = document.createElement("h3");
    const lineDividerEl = document.createElement("hr");
    const lineDivider2El = document.createElement("hr");

    const txtProjectItemDescriptionEl = document.createElement("p");
    const divClearEl = document.createElement("div");

    txtProjectItemTitleEl.textContent = `${itemIndex + 1}. ${title}`;
    txtProjectItemTitleEl.classList.add("projects-item__title");

    divProjectItemEl.classList.add("projects-item");
    divProjectItemEl.append(txtProjectItemTitleEl);
    divProjectItemEl.append(lineDividerEl);

    if (screenShots) {
      divProjectItemEl.append(generateCarouselItem(_id, screenShots));
    }

    txtProjectItemDescriptionEl.textContent = description;
    txtProjectItemDescriptionEl.classList.add("projects-item__description");
    divProjectItemEl.append(txtProjectItemDescriptionEl);
    lineDividerEl.classList.add("w3-opacity");
    lineDivider2El.classList.add("w3-opacity");
    divClearEl.classList.add("clearfix");

    divProjectItemEl.append(
      generateListItems(
        techUsed,
        "projects-item__techUsed",
        "Technologies Used"
      )
    );
    divProjectItemEl.append(lineDivider2El);
    divProjectItemEl.append(generateLinks(links));

    divProjectItemEl.append(divClearEl);

    return divProjectItemEl;
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
      const imgProjectItemPhotoEl = document.createElement("img");
      imgProjectItemPhotoEl.src = images[i];
      imgProjectItemPhotoEl.classList.add(
        "projects-item__image",
        _id + "-carousel",
        i % 2 === 0 ? "w3-animate-right" : "w3-animate-left",
        // "w3-animate-fading",
        "w3-image",
        "w3-round"
      );

      divCarouselEl.append(imgProjectItemPhotoEl);
    }

    return divCarouselEl;
  }

  /**
   * Generates a list of items
   * @function
   * @param {string[]} items
   * @returns {HTMLUListElement}
   */
  function generateListItems(items, className, title) {
    const ulEl = document.createElement("ul");
    ulEl.classList.add(className);
    ulEl.innerText = title;

    for (let i = 0; i < items.length; i++) {
      const liEl = document.createElement("li");
      liEl.innerText = items[i];
      liEl.classList.add(className);

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
    divLinksEl.classList.add("projects-item__links");
    divLinksEl.textContent = "More: ";

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

  btnSendMessageEl.addEventListener("click", (_) => {
    // evt.preventDefault();
    // console.log(formContactEl);
  });

  localStorage.setItem("theme", "dark");
  initProjects();
  updateNavBar();
  // updateAppTheme("dark");
});
