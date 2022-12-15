const nums = document.querySelectorAll(".num");
const btn = document.querySelector(".btn-submit");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const number = document.querySelector(".number");

var rating = 10;
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    rating = nums[i].innerHTML;
  });
}
btn.addEventListener("click", () => {
  number.innerText = rating;
  front.classList.remove("active");
  back.classList.add("active");
});
