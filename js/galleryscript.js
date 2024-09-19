// Get all the images and modals
var imgs = document.querySelectorAll(".myImg");
var modals = document.querySelectorAll(".modal");
var modalImgs = document.querySelectorAll(".modal-content");
var captions = document.querySelectorAll(".caption");
var closeBtns = document.querySelectorAll(".close");

// Loop through each image to add click event
imgs.forEach(function (img, index) {
  img.onclick = function () {
    modals[index].style.display = "block";
    modalImgs[index].src = this.src;
    captions[index].innerHTML = this.alt;
  };
});

// Loop through each close button to add click event
closeBtns.forEach(function (btn, index) {
  btn.onclick = function () {
    modals[index].style.display = "none";
  };
});

// Close the modal if clicked outside the content
window.onclick = function (event) {
  modals.forEach(function (modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};