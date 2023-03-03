/**
 * @module
 * @name Scripts
 * @description - It hold all the scripts for the website.
 */

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

  /**
   * All my works
   * @constant
   */
  const MY_WORKS = [
    {
      _id: "myWorksItem1",
      title: "Musto Flix (Angular)",
      description:
        "A simple implementation of Angular framework to build a web-app for movie fans, that communicates with the backend server for fetching data. Users can register themselves and set a favorites list of the available movies for themselves. They can also search a movie, or get more details about it, such as information about its genre(s), director(s), and star(s).",
      screenShots: [
        "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-1.png?raw=true",
        "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-2.png?raw=true",
        "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-3.png?raw=true",
        "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-4.png?raw=true",
        "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-5.png?raw=true",
        "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-6.png?raw=true",
      ],
      techUsed: ["Angular", "TypeScript"],
      links: [
        {
          title: "Source code",
          href: "https://github.com/mustafa-sarshar/musto-flix-angular/",
        },
        {
          title: "Website",
          href: "https://mustafa-sarshar.github.io/musto-flix-angular/",
        },
        {
          title: "Documentation",
          href: "https://github.com/mustafa-sarshar/musto-flix-angular/tree/main/docs",
        },
      ],
    },
    {
      _id: "myWorksItem2",
      title: "Musto Flix (React)",
      description:
        "A simple implementation of React.js library (framework) to build a web-app for movie fans, that communicates with the backend server for fetching data. Users can register themselves and set a favorites list of the available movies for themselves. They can also search a movie, or get more details about it, such as information about its genre(s), director(s), and star(s).",
      screenShots: [
        "https://github.com/mustafa-sarshar/musto-flix-react/blob/main/docs/assets/img/musto-flix-react-1.png?raw=true",
        "https://github.com/mustafa-sarshar/musto-flix-react/blob/main/docs/assets/img/musto-flix-react-2.png?raw=true",
        "https://github.com/mustafa-sarshar/musto-flix-react/blob/main/docs/assets/img/musto-flix-react-3.png?raw=true",
        "https://github.com/mustafa-sarshar/musto-flix-react/blob/main/docs/assets/img/musto-flix-react-4.png?raw=true",
      ],
      techUsed: [
        "React +18",
        "React Bootstrap",
        "React Redux",
        "React Toastify",
        "Parcel",
      ],
      links: [
        {
          title: "Source code",
          href: "https://github.com/mustafa-sarshar/musto-flix-react/",
        },
        {
          title: "Website",
          href: "https://mustafa-sarshar.github.io/musto-flix-react/",
        },
      ],
    },
    {
      _id: "myWorksItem3",
      title: "Musto Easy Meet",
      description:
        "A web-app for tech guys and developers worldwide. This is a web-app for finding events, helping web-developers to meet each other and get connected easier. This web-app is also Progressive Web App (PWA) and can be installed locally on any device as well as run in offline-mode, when the internet is not accessible. The data is fetched via Google Calendar API from a Google Calendar (Calendar ID: fullstackwebdev@careerfoundry.com).",
      screenShots: [
        "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-1.png?raw=true",
        "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-2.png?raw=true",
        "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-3.png?raw=true",
        "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-4.png?raw=true",
        "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-5.png?raw=true",
      ],
      techUsed: [
        "React.js",
        "AWS lambda",
        "TDD/BDD methodology",
        "Google Calendar API",
      ],
      links: [
        {
          title: "Source code",
          href: "https://github.com/mustafa-sarshar/easy-meet",
        },
        {
          title: "Website",
          href: "https://mustafa-sarshar.github.io/easy-meet/",
        },
      ],
    },
    {
      _id: "myWorksItem4",
      title: "Musto Friendly Chat",
      description:
        "An implementation of React Native for developing a simple Chat application for mobile devices (iOS/Android). The backend is developed using Google Firestore.",
      screenShots: [
        "https://github.com/mustafa-sarshar/friendly-chat/blob/main/docs/assets/img/musto-friendly-chat-1.png?raw=true",
        "https://github.com/mustafa-sarshar/friendly-chat/blob/main/docs/assets/img/musto-friendly-chat-2.png?raw=true",
        "https://github.com/mustafa-sarshar/friendly-chat/blob/main/docs/assets/img/musto-friendly-chat-3.png?raw=true",
        "https://github.com/mustafa-sarshar/friendly-chat/blob/main/docs/assets/img/musto-friendly-chat-4.png?raw=true",
      ],
      techUsed: [
        "React-Native",
        "React-Native-Gifted-Chat",
        "Expo",
        "Firebase",
      ],
      links: [
        {
          title: "Source code",
          href: "https://github.com/mustafa-sarshar/friendly-chat",
        },
        {
          title: "Video",
          href: "https://youtu.be/vFDsjfluJ_c",
        },
      ],
    },
    {
      _id: "myWorksItem5",
      title: "Pokemon (Pocket Monsters) cards",
      description:
        "A simple Web-App for kids who are a fan of Pokemon characters. The app fetches the data about Pokemon from pokeapi.co",
      screenShots: [
        "https://github.com/mustafa-sarshar/pokemon-cards/blob/main/docs/img/pokemon-cards-1.png?raw=true",
        "https://github.com/mustafa-sarshar/pokemon-cards/blob/main/docs/img/pokemon-cards-2.png?raw=true",
        "https://github.com/mustafa-sarshar/pokemon-cards/blob/main/docs/img/pokemon-cards-3.png?raw=true",
      ],
      techUsed: [
        "HTML 5",
        "CSS 3 (SASS)",
        "JavaScript",
        "jQuery",
        "Bootstrap v3",
      ],
      links: [
        {
          title: "Source code",
          href: "https://github.com/mustafa-sarshar/pokemon-cards/",
        },
        {
          title: "Website",
          href: "https://mustafa-sarshar.github.io/pokemon-cards/",
        },
      ],
    },
    {
      _id: "myWorksItem6",
      title: "Movie Api",
      description:
        "A backend for interacting with Apis. This web application will provide users with the access to information about different movies, directors, actors, and genres through Api. Users will be able to sign up, update their personal information, and create a list of their favorite movies.",
      screenShots: null,
      techUsed: ["Node.js", "Express.js", "MongoDB"],
      links: [
        {
          title: "Source code",
          href: "https://github.com/mustafa-sarshar/movie-api/",
        },
        {
          title: "Website",
          href: "https://musto-movie-api-vf0k.onrender.com/",
        },
        {
          title: "Documentation",
          href: "https://mustafa-sarshar.github.io/movie-api/",
        },
      ],
    },
  ];

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
    const navbarItems = document.getElementsByClassName("w3-bar-item");

    for (let i = 0; i < navbarItems.length; i++) {
      const navbarItemId = navbarItems[i].href.split("#")[1];
      if (navbarItemId === itemId) {
        navbarItems[i].classList.add("w3-black", "w3-hover-white");
        navbarItems[i].classList.remove("w3-hover-black");
      } else {
        navbarItems[i].classList.remove("w3-black", "w3-hover-white");
        navbarItems[i].classList.add("w3-hover-black");
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
