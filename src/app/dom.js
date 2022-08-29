const navButton = () => {
  const Btn = document.querySelector(".nav-btn");
  const aside = document.querySelector(".nav-links");
  const btnImg = document.querySelector(".nav-btn > img");
  console.log(btnImg);

  return Btn.addEventListener("click", () => {
    aside.classList.toggle("active");
    btnImg.classList.toggle("active");
  });
};

export { navButton };
