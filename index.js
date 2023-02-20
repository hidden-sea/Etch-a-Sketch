"use strict";
const sizeOfGrid = 16;
const resetButton = document.querySelector("button");
document.querySelector(".bigContainer");
const container = document.querySelector(".bigContainer");
const createGrid = (amtofGrids) => {
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
    container.appendChild(row);
  }
};

createGrid(sizeOfGrid);
