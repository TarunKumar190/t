export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;

  const y =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    navbarHeight;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
