const modal = document.getElementsByClassName("modal");
const modalBtn = document.getElementsByClassName("modal-btn");
const closeBtn = document.getElementsByClassName("close");

for (let i = 0; i < modal.length; i++) {
  // Open
  modalBtn[i].addEventListener("click", function () {
    modal[i].style.display = "block";
  });

  // Close
  closeBtn[i].addEventListener("click", function () {
    modal[i].style.display = "none";
  });

  // Close If Clicked Outside Modal
  window.addEventListener("click", function (e) {
    if (e.target == modal[i]) {
      modal[i].style.display = "none";
    }
  });
}
