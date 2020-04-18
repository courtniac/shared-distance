var showModal = document.getElementById("modal__show");
var modal = document.getElementById("modal");
var closeBtn = document.getElementById("modal__close-btn");

showModal.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};


// Another way to have the modal popup

// const toggleModal = () => {
//   document.querySelector(".modal").classList.toggle("modal--hidden");
// };
// document.querySelector("#show-modal").addEventListener("click", toggleModal);

// document
//   .querySelector(".modal__close-bar")
//   .addEventListener("click", toggleModal);

// var noScroll = document.getElementById("no-scroll");