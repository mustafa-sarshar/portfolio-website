"use strict";

(function () {
    const formEl = document.querySelector("form");
    const emailInputEl = document.querySelector("#email");
    const telInputEl = document.querySelector("#tel");
    const msgInputEl = document.querySelector("#message");
    const modalContainerEl = document.querySelector(".modal-container");

    emailInputEl.addEventListener("input", validateEmail);
    telInputEl.addEventListener("input", validateTel);
    msgInputEl.addEventListener("input", validateMessage);

    function showErrorMessage(inputEl, message) {
        const containerEl = inputEl.parentElement;    // The .input-wrapper
        // Check and remove any existing errors
        const errorEl = containerEl.querySelector(".error-message");
        if (errorEl) {
            containerEl.removeChild(errorEl);
        }

        // Add the error if the message != 'empty'
        if (message) {
            const errorEl = document.createElement("div");
            errorEl.classList.add("error-message");
            errorEl.innerText = message;
            containerEl.appendChild(errorEl);
        }
    }

    function validateEmail() {
        const emailValue = emailInputEl.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;     // Source: http://zparacha.com/validate-email-address-using-javascript-regular-expression (accessed on 10.10.2022)
        if (!emailValue) {
            showErrorMessage(emailInputEl, "This is a required field!");
            return false;
        }
        if (!emailPattern.test(emailValue)) {
            showErrorMessage(emailInputEl, "You must enter a valid email address! (note: someone@mail.com)");
            return false;
        }
        showErrorMessage(emailInputEl, null);
        return true;
    }

    function validateTel() {
        const telValue = telInputEl.value;
        const telPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;     // Source: https://www.abstractapi.com/guides/validate-phone-number-javascript (accessed on 10.10.2022)
        if (!telValue) {
            return true;
        }
        if (!telPattern.test(telValue)) {
            showErrorMessage(telInputEl, "You must enter a valid telephone number! (note: ###-###-####)");
            return false;
        }
        showErrorMessage(telInputEl, null);
        return true;
    }

    function validateMessage() {
        const msgValue = msgInputEl.value;
        if (!msgValue) {
            showErrorMessage(msgInputEl, "Message is a required field!");
            return false
        }
        if (msgValue.length < 20) {
            showErrorMessage(msgInputEl, `The message needs to be at least 20 characters long! (current length: ${msgValue.length})`);
            return false;
        }
        showErrorMessage(msgInputEl, null);
        return true;
    }

    function validateForm() {
        const isEmailValid = validateEmail();
        const isTelValid = validateTel();
        const isMsgValid = validateMessage();
        return isEmailValid && isTelValid && isMsgValid;
    }

    window.addEventListener("keydown", (e) => {
        if (e.key == "Escape" && modalContainerEl.style.display !== "none")
            hideModal();
    })

    modalContainerEl.addEventListener("click", (e) => {
        if (e.target === modalContainerEl)
            hideModal();
    })

    function showModal(title, message) {
        modalContainerEl.innerHTML = "";    // Clear all child elements 

        // Add modal element
        const modalEl = document.createElement("div");
        modalEl.classList.add("modal-wrapper");

        // Add child elements to modal element
        const modalBtnClose = document.createElement("button");
        modalBtnClose.classList.add("modal__close-button");
        modalBtnClose.innerText = "Close";
        modalBtnClose.addEventListener("click", hideModal);

        const modalTitleEl = document.createElement("h1");
        modalTitleEl.innerText = title;

        const modalTextEl = document.createElement("p");
        modalTextEl.innerText = message;

        // Initialize the Modal Container
        modalEl.appendChild(modalBtnClose);
        modalEl.appendChild(modalTitleEl);
        modalEl.appendChild(modalTextEl);
        modalContainerEl.appendChild(modalEl);
        modalContainerEl.style.display = "block";
    }

    function hideModal() {
        modalContainerEl.style.display = "none";
    }

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm()) {
            showModal("Submission was successful", `Message send by ${emailInputEl.value}`);
        } else {
            showModal("Submission was not successful", "Please enter the required fields and write a message with at least 20 characters!");
        }
    });
})();