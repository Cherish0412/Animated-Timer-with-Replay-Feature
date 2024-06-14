const numberSpans = document.querySelectorAll(".nums span");
const counterContainer = document.querySelector(".counter");
const finalMessageContainer = document.querySelector(".final");
const replayButton = document.querySelector("#replay");

const resetAnimation = () => {
  counterContainer.classList.remove("hide");
  finalMessageContainer.classList.remove("show");
  numberSpans.forEach((span) => (span.classList.value = ""));
  numberSpans[0].classList.add("in");
};

const startAnimation = () => {
  numberSpans.forEach((span, index) => {
    const lastNumberIndex = numberSpans.length - 1;
    span.addEventListener("animationend", (event) => {
      if (event.animationName === "goIn" && index !== lastNumberIndex) {
        span.classList.remove("in");
        span.classList.add("out");
      } else if (event.animationName === "goOut" && span.nextElementSibling) {
        span.nextElementSibling.classList.add("in");
      } else {
        counterContainer.classList.add("hide");
        finalMessageContainer.classList.add("show");
      }
    });
  });
};

startAnimation();

replayButton.addEventListener("click", () => {
  resetAnimation();
  startAnimation();
});
