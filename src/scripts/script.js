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
    const x = content.offsetWidth - element.clientWidth;
    const y = content.offsetHeight - element.clientHeight - 70;
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
  
    textElement.addEventListener('animationend', () => {
      textElement.remove();
    });
  }
  
  setInterval(createText, 1500);


 // Pobranie wszystkich elementów z klasą .trust-company
const elements = document.querySelectorAll('.trust-company');

// Funkcja do losowego wyboru elementu z tablicy
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Funkcja do zmiany skali i stylów wybranego elementu
function changeScale() {
    // Resetowanie skali i stylów wszystkich elementów
    elements.forEach(el => {
        el.style.transform = '';
        el.style.backgroundColor = '';
        el.style.filter = '';
    });

    // Losowy wybór elementu i zmiana jego skali oraz stylów
    const randomElement = getRandomElement(elements);
    randomElement.style.transform = 'scale(1.2)';
    randomElement.style.backgroundColor = 'white';
    randomElement.style.filter = 'grayscale(0)';

    // Przywrócenie pierwotnej skali i stylów po 1 sekundzie
    setTimeout(() => {
        randomElement.style.transform = '';
        randomElement.style.backgroundColor = '';
        randomElement.style.filter = '';
    }, 1000);
}

// Ustawienie interwału, aby funkcja była wywoływana co sekundę
setInterval(changeScale, 2000);
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
