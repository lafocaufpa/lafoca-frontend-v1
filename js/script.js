// EXPANDIR/RECOLHER ACCORDION---------
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
  });
}


// EXIBIR BACKGROUND DA NAVBAR APOS ALGUNS PX
window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");

  if (window.pageYOffset >= 200) {
    header.classList.add("show-background");
  } else {
    header.classList.remove("show-background");
  }
});


// SCROLL REVEAL
ScrollReveal({
  reset:true,
  distance: '5rem',
  duration: 2000,
  delay:100
});

ScrollReveal().reveal('.bg-laranja', { origin: 'top' });
ScrollReveal().reveal('.img-girl', { origin: 'left' });

