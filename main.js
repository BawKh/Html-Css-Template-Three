let numbers = document.querySelectorAll(".our-states .container .box .number");
let statsSection = document.querySelector(".our-states");
let started = false; // function started = No
function StartCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      numbers.forEach((ele) => StartCount(ele));
    }
    started = true;
  }
};

let MySkillsSec = document.querySelector(".our-skills");
let MyBoxes = document.querySelectorAll(".our-skills .the-progress span");
window.onscroll = function () {
  if (window.scrollY >= MySkillsSec.offsetTop - 500) {
    if (!started) {
      MyBoxes.forEach((ele) => (ele.style.width = ele.dataset.width));
    }
    started = true;
  }
};
