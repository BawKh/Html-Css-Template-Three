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

let countdownDate = new Date(
  `Nov 18 , ${new Date().getFullYear()} 23:59:59`
).getTime();
let counter = setInterval(() => {
  // Get DAte Now
  let DateNow = new Date().getTime();
  // Find the deference between the date Now And CountDownDate
  let DifferDate = countdownDate - DateNow;
  // let Years = Math.floor(DifferDate / (1000 * 60 * 60 * 24 * 365));
  // let Days = Math.floor(
  //   (DifferDate % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
  // );
  DifferDate < 0 ? d.setFullYear(new Date().getFullYear() + 1) : countdownDate;
  const Days = Math.floor(DifferDate / (1000 * 60 * 60 * 24));
  const Hours = Math.floor(
    (DifferDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const Minutes = Math.floor((DifferDate % (1000 * 60 * 60)) / (1000 * 60));
  const Seconds = Math.floor((DifferDate % (1000 * 60)) / 1000);
  document.querySelector(
    ".events .container .info .time .unit .days"
  ).innerHTML = Days < 10 ? `0${Days}` : Days;
  document.querySelector(
    ".events .container .info .time .unit .hours"
  ).innerHTML = Hours < 10 ? `0${Hours}` : Hours;
  document.querySelector(
    ".events .container .info .time .unit .minutes"
  ).innerHTML = Minutes < 10 ? `0${Minutes}` : Minutes;
  document.querySelector(
    ".events .container .info .time .unit .seconds"
  ).innerHTML = Seconds < 10 ? `0${Seconds}` : Seconds;
  DifferDate--;
}, 1000);
