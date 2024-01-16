window.onload = function () {
  const jobCards = document.querySelectorAll(".card-job-container");
  const closeButtons = document.querySelectorAll(".close");

  if (jobCards.length > 0) {
    jobCards.forEach((card) => {
      card.addEventListener("click", function () {
        showJobOffer(this);
      });
    });
  }

  if (closeButtons.length > 0) {
    closeButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
        hideJobOffer();
      });
    });
  }

  window.addEventListener("scroll", function () {
    changeNavigationStyle();
  });

  const showJobOffer = function (jobCard) {
    const cards = document.querySelectorAll(".card-job-container");
    cards.forEach((card) => {
      card.classList.remove("card-job-active");
    });

    jobCard.classList.add("card-job-active");
  };

  const hideJobOffer = function () {
    const cards = document.querySelectorAll(".card-job-container");
    cards.forEach((card) => {
      card.classList.remove("card-job-active");
    });
  };

  const changeNavigationStyle = function () {
    const navi = document.getElementsByClassName("top-menu-container")[0];
    const naviLogo = document.getElementsByClassName("navi-logo")[0];

    if (this.window.scrollY > 30) {
      navi.classList.add("top-menu-active");
    } else {
      navi.classList.remove("top-menu-active");
    }
  };

  //MODAL JOB APPLY
  const offers = document.querySelectorAll(".apply-btn");

  if (offers.length > 0) {
    offers.forEach((btn) => {
      btn.addEventListener("click", function () {
        showModal();
      });
    });
  }

  const modal = document.getElementsByClassName("modal")[0];

  showModal = function () {
    modal.style.display = "block";
  };

  const closeBtn = document.getElementsByClassName("close-btn")[0];

  if (closeBtn != null) {
    closeBtn.onclick = () => (modal.style.display = "none");

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
  //END MODAL

  //Case Studies animation

  const animateScroll = function () {
    caseStudiesAmination();
  };

  const caseStudies = document.querySelectorAll(".article");

  if (caseStudies.length > 0) {
    caseStudies.forEach((s) => {
      if (s.getBoundingClientRect().top < screen.height - 100) {
        s.classList.add("show");
      }
    });
  }

  const caseStudiesAmination = function () {
    if (caseStudies.length > 0) {
      caseStudies.forEach((studies) => {
        if (studies.getBoundingClientRect().top < screen.height - 100) {
          studies.classList.add("show");
        } else {
          studies.classList.remove("show");
        }
      });
    }
  };

  window.addEventListener("scroll", function () {
    animateScroll();
  });

  const texts = ['Wydobycie i produkcja kruszyw', 'Produkcja wapna', 'Recykling','Produkcja betonu']; // Dodaj więcej tekstów według potrzeb
  const container = document.getElementById('random-text-container');
  const content = document.querySelector(".content-section")

  function getRandomPosition(element) {
    const x = content.offsetHeight - element.clientHeight;
    const y = content.offsetWidth - element.clientWidth;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }
  
  function createText() {
    const textElement = document.createElement('div');
    textElement.classList.add('animated-text');
    textElement.textContent = texts[Math.floor(Math.random() * texts.length)];
    const [x, y] = getRandomPosition(textElement);
    textElement.style.left = y + 'px';
    textElement.style.top = x + 'px';
    container.appendChild(textElement);
  
    // Usuń element po zakończeniu animacji
    textElement.addEventListener('animationend', () => {
      textElement.remove();
    });
  }
  
  // Uruchom funkcję co 2 sekundy
  setInterval(createText, 5000);
};

document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".content-title");
  const subtitle = document.querySelector(".content-subtitle");
  const paragraph = document.querySelector(".content-paragraph");

  if (title != null && subtitle != null && paragraph != null) {
    title.style.animation = "fadeInLeft 3s forwards";
    subtitle.style.animation = "fadeIn 1s 2s forwards";
    paragraph.style.animation = "fadeIn 1s 3s forwards";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // menu click event
  var menuBtn = document.querySelector(".menuBtn");
  var mainMenu = document.querySelector(".top-menu");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("act");

    if (menuBtn.classList.contains("act")) {
      mainMenu.classList.add("act");
    } else {
      mainMenu.classList.remove("act");
    }
  });
});
