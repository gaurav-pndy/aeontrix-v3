export function scrollToSection(router, pathname, id, offset = 120) {
  const scroll = () => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  if (pathname === "/") {
    scroll();
  } else {
    router.push(`/#${id}`);

    setTimeout(scroll, 350);
  }
}
