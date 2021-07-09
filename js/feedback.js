const ButtomFeedback = document.querySelector(".buttom-maps-text");
const ModalFeedback = document.querySelector(".positional-modal");
const ModalClose = ModalFeedback.querySelector(".modal-close-map");
const NameModal = ModalFeedback.querySelector(".feedback-inf");
const ModalForm = ModalFeedback.querySelector(".feedback-form");
const ModalEmail = ModalFeedback.querySelector(".feedback-social");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

ButtomFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    ModalFeedback.classList.add("modal-show");

    if (storage) {
        NameModal.value = storage;
    }

    NameModal.focus();
});

ModalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    ModalFeedback.classList.remove("modal-show");
    ModalFeedback.classList.remove("modal-error");
});

ModalForm.addEventListener("submit", function (evt) {
    if (!NameModal.value || !ModalEmail.value) {
      evt.preventDefault();
      ModalFeedback.classList.add("modal-error");
      ModalFeedback.offsetWidth = ModalFeedback.offsetWidth;
      ModalFeedback.classList.remove("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", NameModal.value);
      }
    }
});
  

window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
        if (ModalFeedback.classList.contains("modal-show")) {
            evt.preventDefault();
            ModalFeedback.classList.remove("modal-show");
        }
    }
});