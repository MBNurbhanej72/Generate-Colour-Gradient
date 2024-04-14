let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyCode = document.getElementById("copyCode");
let rgb1 = "#5c91e5";
let rgb2 = "#983fc6";

let HexValue = () => {
  let myHex = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHex[Math.floor(Math.random() * 16)];
  }
  return colors;
};

let handleBtn1 = () => {
  rgb1 = HexValue();
  btn1.innerText = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to <br> right, ${rgb1}, ${rgb2})`;
};

let handleBtn2 = () => {
  rgb2 = HexValue();
  btn2.innerText = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to <br> right, ${rgb1}, ${rgb2})`;
};

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);
  alert("Copied the text");
});

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
