"use strict";
const sizeOfGrid = 16;
const resetButton = document.querySelector("button");
document.querySelector(".bigContainer");
const container = document.querySelector(".bigContainer");

const createGrid = (amtofGrids) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  for (let i = 0; i < amtofGrids; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < amtofGrids; j++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = "black";
      });
      row.appendChild(gridBox);
    }
    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
};

createGrid(sizeOfGrid);
resetButton.addEventListener("click", () => {
  let userSize = Number(prompt("choose a size between 1-100"));
  while (userSize > 100) {
    const userSize = Number(prompt("choose a size between 1-100"));
  }
  const wrapper = document.querySelector(".wrapper");
  if (!wrapper) {
    createGrid(userSize);
  } else {
    wrapper.remove();
    createGrid(userSize);
  }
});
