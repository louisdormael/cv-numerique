document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".imgSize");
  
    images.forEach(image => {
      image.addEventListener("mouseenter", function (event) {
        let tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.innerText = image.getAttribute("data-tooltip");
        document.body.appendChild(tooltip);
  
        let rect = image.getBoundingClientRect();
        tooltip.style.left = rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
        tooltip.style.top = rect.top + window.scrollY - tooltip.offsetHeight - 10 + "px";
  
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
  
        image.addEventListener("mouseleave", function () {
          tooltip.remove();
        });
      });
    });
  });