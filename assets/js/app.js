import { Rating } from "./success.module.js";

let numbers = document.getElementsByTagName("li"),
  btn = document.querySelector(".submit");

numbers = Array.from(numbers);

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    Rating.select(number);
  });
});

btn.addEventListener("click", () => {
  let stars = document.querySelector(".selected"),
    rating = document.querySelector(".wrapper"),
    thankYou = document.querySelector(".wrapper2");

  rating.style.display = "none";
  thankYou.style.display = "block";

  Rating.addText(stars);
});

