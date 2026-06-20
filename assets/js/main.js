// Dark Mode
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* -------- DOWNLOAD CV ---------- */
function downloadCV(url) {
  const a = document.createElement("a");
  a.href = url;
  let filename = "AEM-DEV-SWAPNANIL-DUTTA.pdf";
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["AEM Developer", "Engineer", "Photographer", "Football Player"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-stat", { interval: 120 });
sr.reveal(".project-card", { interval: 160 });
sr.reveal(".credential-card", { delay: 120 });
sr.reveal(".experience-card", { delay: 180 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/* --------- HIRE ME LINK TO CONTACT TEXT ---------- */

const hiretext =
  "Dear Swapnanil, we were impressed by your qualifications and experience, and we would love to offer you a position at our company. We believe you'll be a valuable addition to our team.";

function hireClick(e) {
  document.getElementById("message").value = hiretext;
  document.getElementById("message").blur();
}

/* --------- ORGANIZATION DETAILS MODAL ---------- */
const organizationDetails = {
  cognizant: {
    kicker: "Since Jul 2025 | Programmer Analyst",
    title: "Cognizant Technology",
    description:
      "Contributing to enterprise AEM transformation programs with Drupal-to-AEM migration, AEM Headless CMS implementation, Java backend integrations, Salesforce API connectivity, and multilingual rollout workflows.",
    meta: ["AEM Headless CMS", "Salesforce API", "NextJS", "14 LATAM Markets"],
    projects: [
      {
        name: "US Kitchen and Bathroom",
        date: "May 2026 - Present",
        summary:
          "Led AEM Headless CMS implementation for structured content delivery and NextJS integration, with Java backend and custom AEM components for Salesforce API value input.",
      },
      {
        name: "LATAM Pharma",
        date: "Jul 2025 - Mar 2026",
        summary:
          "Executed Drupal to AEM migration with hybrid legacy component mapping and Figma-driven UI, Salesforce API integration, automated workflows, language copy scaling, and rollout across 14 LATAM regions.",
      },
    ],
  },
  persistent: {
    kicker: "Jun 2022 - Jun 2024 | Software Engineer",
    title: "Persistent Systems",
    description:
      "Delivered custom AEM components, reusable Experience Fragments, Java Servlet integrations, Runmodes, workflows, and GenAI-enabled authoring enhancements across enterprise CMS programs.",
    meta: ["AEM 6.5", "Java Servlets", "Experience Fragments", "GenAI"],
    projects: [
      {
        name: "GenAI - AEM Accelerators",
        date: "Jan 2024 - Jun 2024",
        summary:
          "Developed GenAI-enabled AEM components, pages, and custom RTE plugins integrated with servlets, Gemini, and OpenAI APIs; solution showcased at Adobe Summit 2024.",
      },
      {
        name: "Luxury Home & Kitchen Appliances",
        date: "Aug 2023 - Jan 2024",
        summary:
          "Built custom AEM components and reusable Experience Fragments with backend Java Servlet integrations, Runmodes, and publishing workflows.",
      },
      {
        name: "New Pharma",
        date: "Aug 2022 - Aug 2023",
        summary:
          "Developed and managed AEM 6.5 pages, components, assets, and servlets for content authoring and dynamic page rendering.",
      },
    ],
  },
};

const organizationModal = document.getElementById("organization-modal");
const organizationKicker = document.getElementById("organization-modal-kicker");
const organizationTitle = document.getElementById("organization-modal-title");
const organizationDescription = document.getElementById(
  "organization-modal-description"
);
const organizationMeta = document.getElementById("organization-modal-meta");
const organizationProjects = document.getElementById(
  "organization-modal-projects"
);
let activeOrganizationTrigger = null;

function openOrganizationModal(organizationKey, trigger) {
  const details = organizationDetails[organizationKey];
  if (!details || !organizationModal) return;

  activeOrganizationTrigger = trigger;
  organizationKicker.textContent = details.kicker;
  organizationTitle.textContent = details.title;
  organizationDescription.textContent = details.description;
  organizationMeta.innerHTML = details.meta
    .map((item) => `<span>${item}</span>`)
    .join("");
  organizationProjects.innerHTML = details.projects
    .map(
      (project) => `
        <li>
          <strong>${project.name}</strong>
          <span>${project.date}</span>
          <p>${project.summary}</p>
        </li>
      `
    )
    .join("");

  organizationModal.classList.add("is-open");
  organizationModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  organizationModal.querySelector(".organization-close").focus();
}

function closeOrganizationModal() {
  if (!organizationModal) return;

  organizationModal.classList.remove("is-open");
  organizationModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (activeOrganizationTrigger) {
    activeOrganizationTrigger.focus();
    activeOrganizationTrigger = null;
  }
}

document.querySelectorAll("[data-organization]").forEach((item) => {
  item.addEventListener("click", () => {
    openOrganizationModal(item.dataset.organization, item);
  });
});

document.querySelectorAll("[data-close-organization]").forEach((item) => {
  item.addEventListener("click", closeOrganizationModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && organizationModal?.classList.contains("is-open")) {
    closeOrganizationModal();
  }
});

window.addEventListener("scroll", scrollActive);
