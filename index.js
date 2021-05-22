var button = document.querySelector(".share-cta");

button.addEventListener("click", function(e) {
    e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle("active");
  });


