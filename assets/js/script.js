const sections = document.querySelectorAll(".team-section");
const panes = document.querySelectorAll(".team-panel");

sections.forEach((tabs, index) => {
    const pane = panes[index];
    tabs.onclick = function () {
        document.querySelector(".team-section.active").classList.remove('active');
        document.querySelector(".team-panel.active").classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
        /* more.classList.remove('active');
        less.classList.remove('active');
        const members = document.querySelectorAll(".team-panel.active .member-container");
        if (members.length > 8) {
            more.classList.add('active');
        }
        hideMembers(); */
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

/* const more = document.querySelector("#more");
const less = document.querySelector("#less");

const hideMembers = () => {
    const members = document.querySelectorAll(".team-panel.active .member-container");
    if (members.length > 8) {
        for (var i = 0; i < members.length; i++) {
            if (i > 7) {
                members[i].classList.add('hide');
            }
        }
    }
}

const showMembers = () => {
    const members = document.querySelectorAll(".team-panel.active .member-container.hide");
    for (var i = 0; i < members.length; i++) {
        members[i].classList.remove('hide');
    }
}

more.onclick = function () {
    this.classList.remove('active');
    less.classList.add('active');
    showMembers();
}

less.onclick = function () {
    this.classList.remove('active');
    more.classList.add('active');
    hideMembers();
} */