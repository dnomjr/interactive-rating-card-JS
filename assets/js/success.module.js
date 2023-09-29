let numbers = document.getElementsByTagName("li");
numbers = Array.from(numbers);

let select = function (circle) {
  numbers.forEach((x) => {
    if (x.classList.contains("points")) {
      x.classList.remove("points");
    }
  });

  circle.classList.add("points");
};

let addText = function (stars) {
  stars.textContent = `You selected 0 out of 5`;

  numbers.forEach((point) => {
    if (point.classList.contains("points")) {
      console.log(point);
      stars.textContent = `You selected ${point.textContent} out of 5`;
    }
  });
};

export let Rating = {
  select: select,
  addText: addText,
};