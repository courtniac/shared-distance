// const toggleModal = () => {
//   document.querySelector(".modal").classList.toggle("modal--hidden");
// };
// document.querySelector("#show-modal").addEventListener("click", toggleModal);

// document
//   .querySelector(".modal__close-bar")
//   .addEventListener("click", toggleModal);

var noScroll = document.getElementById("no-scroll");
var showModal = document.getElementById("show-modal");
var modal = document.getElementById("modal");
var closeBtn = document.getElementById("popup-close-btn");

showModal.onclick = function () {
  noScroll.overflow = "hidden";
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  noScroll.overflow = "visible";
  modal.style.display = "none";
};
