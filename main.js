let numbers = document.querySelectorAll(".our-states .container .box .number");
let StatsSection = document.querySelector(".our-states");
let startedCount = false; // function started = No
let startedProg = false; // function started = No

let MySkillsSec = document.querySelector(".our-skills");
let MyBoxes = document.querySelectorAll(".our-skills .the-progress span");
window.onscroll = function () {
  if (window.scrollY >= MySkillsSec.offsetTop - 500) {
    if (!startedProg) {
      MyBoxes.forEach((ele) => (ele.style.width = ele.dataset.width));
    }
    startedProg = true;
  }
  if (window.scrollY >= StatsSection.offsetTop) {
    console.log("count area");
    if (!startedCount) {
      numbers.forEach((ele) => StartCount(ele));
    }
    startedCount = true;
  }
};
function StartCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
