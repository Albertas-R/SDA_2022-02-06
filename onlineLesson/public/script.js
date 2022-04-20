console.log("script is running");

const btn = document.querySelector("#btn");
const animatedBall = document.querySelector(".animated");

// const setAnimationPlayState = (el, state) => (el.style.animationPlayState = state);
// const pause = (el) => setAnimationPlayState(el, "paused");
// const run = (el) => setAnitamionPlayState(el, "running");

// const isPaused = (el) => el.style.animationPlayState === "paused";

// btn.addEventListener("click", () => {
//   if (isPaused(animatedBall)) {
//     run(animatedBall);
//     return;
//   }
//   pause(animatedBall);
// });

// v1 be DRY
// btn.addEventListener("click", function () {
//   if (animatedBall.style.animationPlayState === "paused") {
//     animatedBall.style.animationPlayState = "running";
//     // return;
//   } else {
//     animatedBall.style.animationPlayState = "paused";
//   }
// });

// v2 pakeiciam reiksmes
// const pakeiciam = (btn, reiksme) => (btn.style.animationPlayState = reiksme);

// btn.addEventListener("click", function () {
//   if (animatedBall.style.animationPlayState === "paused") {
//     pakeiciam(animatedBall, "running");
//     // return;
//   } else {
//     pakeiciam(animatedBall, "paused");
//   }
// });

// v3
const pakeiciam = (btn, reiksme) => (btn.style.animationPlayState = reiksme);
const pauze = (el) => pakeiciam(el, "paused");
const toliau = (el) => pakeiciam(el, "running");

const isPauze = (el) => el.style.animationPlayState === "paused";

btn.addEventListener("click", function () {
  if (isPauze(animatedBall)) {
    toliau(animatedBall);
    // return;
  } else {
    pauze(animatedBall);
  }
});
