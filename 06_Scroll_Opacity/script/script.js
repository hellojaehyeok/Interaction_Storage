



const checkpoint = 2000;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    opacityG = 0 + currentScroll / checkpoint;
  } else {
    opacityG = 1;
  }
  document.querySelector("div.green").style.opacity = opacityG;
});

