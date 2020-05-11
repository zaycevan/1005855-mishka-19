var buttonscart = document.querySelectorAll(".modal-cart-popup");
var buttoncartArray = Array.prototype.slice.call(buttonscart);
var popup = document.querySelector(".modal-cart");

buttoncartArray.forEach(function (evt) {
  evt.addEventListener("click", function (opn) {
    opn.preventDefault();
    popup.classList.remove("modal-hide");
    popup.classList.add("modal-show");
    if (popup.classList.contains("modal-show")) {
      window.addEventListener("click", function (opn) {
        if (opn.target == popup) {
          popup.classList.remove("modal-show");
          popup.classList.add("modal-hide");
        }
      });
      window.addEventListener("keydown", function (opn) {
        if (opn.keyCode === 27) {
          opn.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.add("modal-hide");
          }
        }
      });
    }
  })
});
