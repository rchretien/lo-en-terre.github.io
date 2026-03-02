(function () {
  "use strict";

  const body = document.body;
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("site-nav");
  const navToggle = document.querySelector(".site-nav-toggle");
  const navToggleIcon = navToggle ? navToggle.querySelector("i") : null;
  const navLinks = Array.from(document.querySelectorAll("#site-nav .scrollto"));
  const backToTop = document.querySelector(".back-to-top");
  const stickyRegisterBtn = document.querySelector(".sticky-register-btn");

  const getHeaderOffset = () => (header ? header.offsetHeight : 0);

  const setMenuState = (open) => {
    if (!navToggle || !navToggleIcon) return;
    body.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggleIcon.classList.toggle("bi-list", !open);
    navToggleIcon.classList.toggle("bi-x", open);
  };

  const closeMenu = () => setMenuState(false);

  const scrollToHash = (hash) => {
    if (!hash || hash === "#") return;
    const target = document.querySelector(hash);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset() + 1;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  const setActiveNavLink = () => {
    const marker = window.scrollY + getHeaderOffset() + 140;
    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("href");
      if (!sectionId || !sectionId.startsWith("#")) return;
      const section = document.querySelector(sectionId);
      if (!section) return;
      const active = marker >= section.offsetTop && marker < section.offsetTop + section.offsetHeight;
      link.classList.toggle("active", active);
    });
  };

  const toggleBackToTop = () => {
    if (!backToTop) return;
    backToTop.classList.toggle("active", window.scrollY > 360);
  };

  const toggleStickyRegister = () => {
    if (!stickyRegisterBtn) return;
    stickyRegisterBtn.classList.toggle("visible", window.scrollY > 720);
  };

  const equalizeTestimonialHeights = () => {
    const testimonialCards = Array.from(document.querySelectorAll(".testimonial-item"));
    if (!testimonialCards.length) return;

    testimonialCards.forEach((card) => {
      card.style.minHeight = "0px";
    });

    if (window.innerWidth < 900) return;

    const maxHeight = testimonialCards.reduce((max, card) => Math.max(max, card.offsetHeight), 0);
    testimonialCards.forEach((card) => {
      card.style.minHeight = `${maxHeight}px`;
    });
  };

  const equalizeFaqHeights = () => {
    const faqCards = Array.from(document.querySelectorAll("#faq .icon-box"));
    if (!faqCards.length) return;

    faqCards.forEach((card) => {
      card.style.minHeight = "0px";
    });

    const maxHeight = faqCards.reduce((max, card) => Math.max(max, card.offsetHeight), 0);
    faqCards.forEach((card) => {
      card.style.minHeight = `${maxHeight}px`;
    });
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      setMenuState(!body.classList.contains("nav-open"));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      event.preventDefault();
      closeMenu();
      scrollToHash(href);
      history.replaceState(null, "", href);
    });
  });

  document.addEventListener("click", (event) => {
    if (!body.classList.contains("nav-open") || !nav || !navToggle) return;
    const target = event.target;
    if (target instanceof Node && !nav.contains(target) && !navToggle.contains(target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1199) {
      closeMenu();
    }
    equalizeTestimonialHeights();
    equalizeFaqHeights();
    window.setTimeout(equalizeTestimonialHeights, 150);
    window.setTimeout(equalizeFaqHeights, 150);
  });

  window.addEventListener("scroll", () => {
    setActiveNavLink();
    toggleBackToTop();
    toggleStickyRegister();
  });

  window.addEventListener("load", () => {
    setActiveNavLink();
    toggleBackToTop();
    toggleStickyRegister();

    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }

    if (window.Swiper && document.querySelector(".testimonials-slider")) {
      new Swiper(".testimonials-slider", {
        speed: 650,
        loop: true,
        autoplay: {
          delay: 5200,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        },
      });
    }

    equalizeTestimonialHeights();
    equalizeFaqHeights();

    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        mirror: false,
      });
    }
  });
})();
