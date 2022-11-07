const display = document.querySelector(".display");
const input = document.querySelector("#upload");
let img = document.querySelector("img");

input.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  reader.addEventListener("load", () => {
    display.innerHTML = `<img src=${reader.result} alt=''/>`;
  });
});
