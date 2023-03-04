/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src-main/assets/scripts/data.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY_WORKS": () => (/* binding */ MY_WORKS)
/* harmony export */ });
/**
 * All my works
 * @constant
 */
const MY_WORKS = [{
  _id: "myWorksItem1",
  title: "Musto Flix (Angular)",
  description: "A simple implementation of Angular framework to build a web-app for movie fans, that communicates with the backend server for fetching data. Users can register themselves and set a favorites list of the available movies for themselves. They can also search a movie, or get more details about it, such as information about its genre(s), director(s), and star(s).",
  screenShots: ["https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-1.png?raw=true", "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-2.png?raw=true", "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-3.png?raw=true", "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-4.png?raw=true", "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-5.png?raw=true", "https://github.com/mustafa-sarshar/musto-flix-angular/blob/main/docs/assets/img/musto-flix-angular-6.png?raw=true"],
  techUsed: ["Angular", "TypeScript"],
  links: [{
    title: "Source code",
    href: "https://github.com/mustafa-sarshar/musto-flix-angular/"
  }, {
    title: "Website",
    href: "https://mustafa-sarshar.github.io/musto-flix-angular/"
  }, {
    title: "Documentation",
    href: "https://github.com/mustafa-sarshar/musto-flix-angular/tree/main/docs"
  }]
}, {
  _id: "myWorksItem2",
  title: "Musto Flix (React)",
  description: "A simple implementation of React.js library (framework) to build a web-app for movie fans, that communicates with the backend server for fetching data. Users can register themselves and set a favorites list of the available movies for themselves. They can also search a movie, or get more details about it, such as information about its genre(s), director(s), and star(s).",
  screenShots: ["https://github.com/mustafa-sarshar/musto-flix-react/blob/main/docs/assets/img/musto-flix-react-1.png?raw=true", "https://github.com/mustafa-sarshar/musto-flix-react/blob/main/docs/assets/img/musto-flix-react-2.png?raw=true", "https://github.com/mustafa-sarshar/musto-flix-react/blob/main/docs/assets/img/musto-flix-react-3.png?raw=true", "https://github.com/mustafa-sarshar/musto-flix-react/blob/main/docs/assets/img/musto-flix-react-4.png?raw=true"],
  techUsed: ["React JS", "React Bootstrap", "React Redux", "React Toastify", "Parcel"],
  links: [{
    title: "Source code",
    href: "https://github.com/mustafa-sarshar/musto-flix-react/"
  }, {
    title: "Website",
    href: "https://mustafa-sarshar.github.io/musto-flix-react/"
  }]
}, {
  _id: "myWorksItem3",
  title: "Musto Easy Meet",
  description: "A web-app for tech guys and developers worldwide. This is a web-app for finding events, helping web-developers to meet each other and get connected easier. This web-app is also Progressive Web App (PWA) and can be installed locally on any device as well as run in offline-mode, when the internet is not accessible. The data is fetched via Google Calendar API from a Google Calendar (Calendar ID: fullstackwebdev@careerfoundry.com).",
  screenShots: ["https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-1.png?raw=true", "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-2.png?raw=true", "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-3.png?raw=true", "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-4.png?raw=true", "https://github.com/mustafa-sarshar/easy-meet/blob/main/docs/assets/img/musto-easy-meet-5.png?raw=true"],
  techUsed: ["React JS", "AWS lambda", "TDD/BDD methodology", "Google Calendar API"],
  links: [{
    title: "Source code",
    href: "https://github.com/mustafa-sarshar/easy-meet"
  }, {
    title: "Website",
    href: "https://mustafa-sarshar.github.io/easy-meet/"
  }]
}, {
  _id: "myWorksItem4",
  title: "Musto Friendly Chat",
  description: "An implementation of React Native for developing a simple Chat application for mobile devices (iOS/Android). The backend is developed using Google Firestore.",
  screenShots: ["https://github.com/mustafa-sarshar/friendly-chat/blob/main/docs/assets/img/musto-friendly-chat-1.png?raw=true", "https://github.com/mustafa-sarshar/friendly-chat/blob/main/docs/assets/img/musto-friendly-chat-2.png?raw=true", "https://github.com/mustafa-sarshar/friendly-chat/blob/main/docs/assets/img/musto-friendly-chat-3.png?raw=true", "https://github.com/mustafa-sarshar/friendly-chat/blob/main/docs/assets/img/musto-friendly-chat-4.png?raw=true"],
  techUsed: ["React-Native", "React-Native-Gifted-Chat", "Expo", "Firebase"],
  links: [{
    title: "Source code",
    href: "https://github.com/mustafa-sarshar/friendly-chat"
  }, {
    title: "Video",
    href: "https://youtu.be/vFDsjfluJ_c"
  }]
}, {
  _id: "myWorksItem5",
  title: "Pokemon (Pocket Monsters) cards",
  description: "A simple Web-App for kids who are a fan of Pokemon characters. The app fetches the data about Pokemon from pokeapi.co",
  screenShots: ["https://github.com/mustafa-sarshar/pokemon-cards/blob/main/docs/img/pokemon-cards-1.png?raw=true", "https://github.com/mustafa-sarshar/pokemon-cards/blob/main/docs/img/pokemon-cards-2.png?raw=true", "https://github.com/mustafa-sarshar/pokemon-cards/blob/main/docs/img/pokemon-cards-3.png?raw=true"],
  techUsed: ["HTML 5", "CSS 3 (SASS)", "JavaScript", "jQuery", "Bootstrap v3"],
  links: [{
    title: "Source code",
    href: "https://github.com/mustafa-sarshar/pokemon-cards/"
  }, {
    title: "Website",
    href: "https://mustafa-sarshar.github.io/pokemon-cards/"
  }]
}, {
  _id: "myWorksItem6",
  title: "Movie Api",
  description: "A backend for interacting with Apis. This web application will provide users with the access to information about different movies, directors, actors, and genres through Api. Users will be able to sign up, update their personal information, and create a list of their favorite movies.",
  screenShots: null,
  techUsed: ["Node JS", "Express JS", "MongoDB"],
  links: [{
    title: "Source code",
    href: "https://github.com/mustafa-sarshar/movie-api/"
  }, {
    title: "Website",
    href: "https://musto-movie-api-vf0k.onrender.com/"
  }, {
    title: "Documentation",
    href: "https://mustafa-sarshar.github.io/movie-api/"
  }]
}];
/******/ })()
;
//# sourceMappingURL=data.550cc4658bfb6ae70c25.js.map