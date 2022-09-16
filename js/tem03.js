// Change the Number of Numbers
let skills = document.querySelector(".skill");
window.onscroll = function () {
  let skillsOfsetTop = skills.offsetTop;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillsOfsetTop) {
    let allskills = document.querySelectorAll(".skill-tog .span");
    allskills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
  console.log();
  if (window.scrollY >= section.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
let nums = document.querySelectorAll(".stats .boxs .box h2");
let section = document.querySelector(".stats");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}
