document.querySelectorAll(`[effect="ripple"]`).forEach((el) => {
  el.addEventListener("click", (e) => {
    e = e.touches ? e.touches[0] : e;
    const r = el.getBoundingClientRect(),
      d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
    el.style.cssText = `--s: 0; --o: 1;`;
    el.offsetTop;
    el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
      e.clientX - r.left
    }; --y:${e.clientY - r.top};`;
  });
});

// services section

let services = document.getElementById("services");
let scards = document.querySelectorAll(".scard");

window.addEventListener("scroll", () => {
  if (window.scrollY >= services.offsetTop - 200) {
    scards.forEach((scard) => {
      scard.classList.add("scard-animation");
      scard.style.opacity = 1;
    });
  }
});

// onload event

let mainCard = document.querySelector(".content .card");

window.onload = function () {
  document.querySelectorAll(".portfolio-images .main-item").forEach((item) => {
    item.classList.add("show");
  });
  mainCard.classList.add("main-card-animation");
  titles.forEach((title) => {
    title.classList.add("title-animation");
  });
};

// menu button event listener

let menuBtn = document.querySelector(".menu-btn");
let aside = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  if (!menuBtn.classList.contains("enabled")) {
    menuBtn.classList.add("enabled");
    aside.classList.add("on");
  } else {
    menuBtn.classList.remove("enabled");
    aside.classList.remove("on");
  }
});

// serach button even listener

let searchIcon = document.querySelector(".search");

searchIcon.addEventListener("click", () => {
  if (!searchIcon.classList.contains("enabled")) {
    searchIcon.classList.add("enabled");
  } else {
    searchIcon.classList.remove("enabled");
  }
});

// event listener to remove enabled class from search icon when user clicks outside the icon

window.addEventListener("click", (e) => {
  if (!searchIcon.contains(e.target)) {
    searchIcon.classList.remove("enabled");
  }
});

// close button event listener

document.querySelector(".close-menu").addEventListener("click", () => {
  menuBtn.classList.remove("enabled");
  aside.classList.remove("on");
});

// event listener to remove menu when user clicks outside the menu

window.addEventListener("click", (e) => {
  if (!aside.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove("enabled");
    aside.classList.remove("on");
  }
});

// protfolio buttons

let selectBtns = document.querySelectorAll(".select-btns button");

selectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");

    let portfolioImages = document.querySelectorAll(
      ".portfolio-images .main-item"
    );

    portfolioImages.forEach((image) => {
      if (btn.getAttribute("data-type") === "all") {
        portfolioImages.forEach((image) => {
          image.classList.add("show");
        });
      } else if (
        image.getAttribute("data-type") === btn.getAttribute("data-type")
      ) {
        image.classList.add("show");
      } else {
        image.classList.remove("show");
      }
    });
  });
});

// show button

let showBtn = document.querySelector(".show-btn");

showBtn.addEventListener("click", () => {
  let extra = document.querySelectorAll(".extra");

  if (!showBtn.classList.contains("active")) {
    showBtn.classList.add("active");
    showBtn.innerHTML = "less";
    extra.forEach((item) => {
      let theSelectedBtn = document.querySelector(".selected");

      if (theSelectedBtn.getAttribute("data-type") === "all") {
        item.classList.add("show");
        item.classList.add("main-item");
      } else if (
        item.getAttribute("data-type") ===
        theSelectedBtn.getAttribute("data-type")
      ) {
        item.classList.add("show");
        item.classList.add("main-item");
      } else {
        item.classList.remove("show");
        item.classList.remove("main-item");
      }
    });
  } else {
    extra.forEach((item) => {
      showBtn.innerHTML = "more";
      showBtn.classList.remove("active");
      item.classList.remove("show");
      item.classList.remove("main-item");
    });
  }
});

// design

let designSection = document.querySelector(".design-section");
let design = document.querySelector(".design-card");

window.addEventListener("scroll", () => {
  if (window.scrollY >= designSection.offsetTop - 400) {
    design.classList.add("design-card-animation");
  }
});

// skillbars

let skills = document.querySelector(".skills");
let bars = document.querySelectorAll(".bar .percent");
let idicators = document.querySelectorAll(".bar .percent span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skills.offsetTop - 400) {
    bars.forEach((bar) => {
      bar.style.width = bar.getAttribute("data-width");
    });

    idicators.forEach((indicator) => {
      indicator.style.opacity = 1;
    });
  }
});
