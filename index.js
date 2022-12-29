require("dotenv").config();
const fs = require("fs");

const ARR_LENGTH = Number(process.env.ARR_LENGTH) || 10;

let array = [];

function initArray() {
  for (let i = 0; i < ARR_LENGTH; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
}

function output() {
  fs.writeFileSync(
    "./output.json",
    JSON.stringify({
      array,
    })
  );
}

initArray();
output();
