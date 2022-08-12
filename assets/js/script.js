const sections = document.querySelectorAll(".team-section");
const panes = document.querySelectorAll(".team-panel");

sections.forEach((tabs, index) => {
  const pane = panes[index];
  tabs.onclick = function () {
    document.querySelector(".team-section.active").classList.remove('active');
    document.querySelector(".team-panel.active").classList.remove('active');
    this.classList.add('active');
    pane.classList.add('active');
  }
}
)

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper libray initialization
new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 5,
  autoplay: {
    delay: 3000
  },
})