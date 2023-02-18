// 1: Add event listener for bold button
let countBold = 0;
let countItalic = 0;
let countUnderline = 0;
let countUpperLower = 0;

const messageValue = document.getElementById("message");
document.getElementById("btn-bold").addEventListener("click", function () {
  countBold += 1;
  if (countBold % 2 != 0) {
    messageValue.style.fontWeight = "bold";
  } else {
    messageValue.style.fontWeight = "normal";
  }
});
document.getElementById("btn-italic").addEventListener("click", function () {
  countItalic += 1;
  if (countItalic % 2 != 0) {
    messageValue.style.fontStyle = "italic";
  } else {
    messageValue.style.fontStyle = "normal";
  }
});
document.getElementById("btn-underline").addEventListener("click", function () {
  countUnderline += 1;
  if (countUnderline % 2 != 0) {
    messageValue.style.textDecoration = "underline";
  } else {
    messageValue.style.textDecoration = "none";
  }
});

document.getElementById("left-align").addEventListener("click", function () {
  messageValue.style.textAlign = "left";
});
document.getElementById("center-align").addEventListener("click", function () {
  messageValue.style.textAlign = "center";
});
document.getElementById("right-align").addEventListener("click", function () {
  messageValue.style.textAlign = "right";
});
document.getElementById("justify-align").addEventListener("click", function () {
  messageValue.style.textAlign = "justify";
});
document.getElementById("number").addEventListener("change", function () {
  const numberValue = document.getElementById("number").value;
  messageValue.style.fontSize = `${numberValue}px`;
});
document.getElementById("uppercaseLowercase").addEventListener("click", function () {
    countUpperLower += 1;
    if (countUpperLower % 2 != 0) {
      messageValue.style.textTransform = "uppercase";
    } else {
      messageValue.style.textTransform = "lowercase";
    }
  });
document.getElementById("color").addEventListener("change", function () {
  const color = document.getElementById("color").value;
  messageValue.style.color = color;
});
