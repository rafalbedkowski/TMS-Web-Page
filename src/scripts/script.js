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

  //Trust company animation

  const companies = document.querySelectorAll(".trust-company");
  let startPosition = 50;
  let lastPosition = 0;

  if (companies.length > 0) {
    companies.forEach((company) => {
      company.style.left = startPosition + "px";
      startPosition += company.clientWidth + 50;
      if (lastPosition < startPosition) {
        lastPosition = startPosition - (company.clientWidth + 50);
      }
    });

    setInterval(() => {
      companies.forEach((company) => {
        const companyPosition = parseInt(
          company.style.left.replace("px", ""),
          10
        );
        company.style.left = companyPosition - 10 + "px";

        companyPosition < screen.width && companyPosition > 0
          ? (company.style.visibility = "visible")
          : (company.style.visibility = "hidden");

        if (companyPosition + company.clientWidth <= 0) {
          company.style.left = lastPosition + "px";
        }
      });
    }, 100);
  }

  window.addEventListener("scroll", function () {
    animateScroll();
  });
};
