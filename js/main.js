const x = document.querySelectorAll(".collapsible");
x.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);