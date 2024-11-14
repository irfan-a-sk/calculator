const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "=") {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = eval(value.button);
      }
    } else if (button.value === "C") {
      result.value = "";
    } else if (button.value === "√") {
      result.value = Math.sqrt(result.value);
    } else {
      result.value += button.value;
    }
  });
});

document.getElementById("result").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("enterbtn").click();
  }
});
