const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const progressBar =
  document.querySelector(".progress-bar");

const mobileProgress =
  document.querySelector(".mobile-progress-fill");

const floatingSection =
  document.querySelector(".floating-section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (
      window.scrollY >=
      top - height * 0.35
    ) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      === `#${current}`
    ) {
      link.classList.add("active");
    }
  });

  if (current) {

    const labels = {
      iam: "I AM",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
      skills: "SKILLS",
      credentials: "CREDENTIALS",
      contact: "CONTACT",
    };

    floatingSection.textContent =
      labels[current] || "";
  }

  const scrollTop =
    window.scrollY;

  const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    (scrollTop / docHeight) * 100;

  progressBar.style.height =
    `${progress}%`;

  mobileProgress.style.width =
    `${progress}%`;
});