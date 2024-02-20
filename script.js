var calculationInput = document.getElementById("calculationInput");
var taskInput = document.getElementById("taskInput");
var isDark = false;
var iconWrapper = document.getElementById("darkTheme");
document.getElementById("darkTheme").addEventListener("click", () => {
  if (!isDark) {
    document.querySelectorAll("*")[0].style.background = "#222";
    document.body.style.background = "#222";
    document.getElementById("navbar").style.background = "#222";
    document.getElementById("logoText").style.color = "white";
    document.getElementById("logoText").style.background = "#222";
    document.getElementById("darkTheme").style.background = "#222";
    document.getElementById("calculator").style.background = "#121212";
    calculationInput.style.color = "white";
    taskInput.style.color = "white";
    iconWrapper.src = "images/lightmodeIcon.svg";
    isDark = true;
  } else {
    document.querySelectorAll("*")[0].style.background = "whitesmoke";
    document.body.style.background = "whitesmoke";
    document.getElementById("navbar").style.background = "whitesmoke";
    document.getElementById("logoText").style.color = "black";
    document.getElementById("logoText").style.background = "whitesmoke";
    document.getElementById("darkTheme").style.background = "whitesmoke";
    document.getElementById("calculator").style.background = "white";
    calculationInput.style.color = "black";
    taskInput.style.color = "black";
    iconWrapper.src = "images/darkmodeIcon.svg";
    isDark = false;
  }
});
document.getElementById("sevenBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "7";
  else {
    calculationInput.value = calculationInput.value + "7";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("eightBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "8";
  else {
    calculationInput.value = calculationInput.value + "8";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("nineBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "9";
  else {
    calculationInput.value = calculationInput.value + "9";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("fourBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "4";
  else {
    calculationInput.value = calculationInput.value + "4";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("fiveBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "5";
  else {
    calculationInput.value = calculationInput.value + "5";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("sixBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "6";
  else {
    calculationInput.value = calculationInput.value + "6";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("oneBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "1";
  else {
    calculationInput.value = calculationInput.value + "1";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("twoBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "2";
  else {
    calculationInput.value = calculationInput.value + "2";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("threeBtn").addEventListener("click", () => {
  if (calculationInput.value == "0") calculationInput.value = "3";
  else {
    calculationInput.value = calculationInput.value + "3";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("zeroBtn").addEventListener("click", () => {
  if (calculationInput.value != "0") {
    calculationInput.value = calculationInput.value + "0";
    checkInputLength(calculationInput.value.length);
  }
});
document.getElementById("clearBtn").addEventListener("click", () => {
  calculationInput.value = "0";
  taskInput.value = "";
  checkInputLength(0);
});
document.getElementById("plusMinusBtn").addEventListener("click", () => {
  if (calculationInput.value[0] != "-" && calculationInput.value != "0")
    calculationInput.value = "-" + calculationInput.value;
  else if (calculationInput.value[0] == "-") {
    var array = calculationInput.value.split("");
    array.shift();
    calculationInput.value = array.join("");
  }
});
document.getElementById("percentageBtn").addEventListener("click", () => {
  if (
    calculationInput.value[calculationInput.value.length - 1] != "%" &&
    calculationInput.value[calculationInput.value.length - 1] != "/" &&
    calculationInput.value[calculationInput.value.length - 1] != "*" &&
    calculationInput.value[calculationInput.value.length - 1] != "-" &&
    calculationInput.value[calculationInput.value.length - 1] != "+" &&
    calculationInput.value[calculationInput.value.length - 1] != "."
  )
    calculationInput.value = calculationInput.value + "%";
});
document.getElementById("divideBtn").addEventListener("click", () => {
  if (
    calculationInput.value[calculationInput.value.length - 1] != "%" &&
    calculationInput.value[calculationInput.value.length - 1] != "/" &&
    calculationInput.value[calculationInput.value.length - 1] != "*" &&
    calculationInput.value[calculationInput.value.length - 1] != "-" &&
    calculationInput.value[calculationInput.value.length - 1] != "+" &&
    calculationInput.value[calculationInput.value.length - 1] != "."
  )
    calculationInput.value = calculationInput.value + "/";
});
document.getElementById("multiplicationBtn").addEventListener("click", () => {
  if (
    calculationInput.value[calculationInput.value.length - 1] != "%" &&
    calculationInput.value[calculationInput.value.length - 1] != "/" &&
    calculationInput.value[calculationInput.value.length - 1] != "*" &&
    calculationInput.value[calculationInput.value.length - 1] != "-" &&
    calculationInput.value[calculationInput.value.length - 1] != "+" &&
    calculationInput.value[calculationInput.value.length - 1] != "."
  )
    calculationInput.value = calculationInput.value + "*";
});
document.getElementById("minusBtn").addEventListener("click", () => {
  if (
    calculationInput.value[calculationInput.value.length - 1] != "%" &&
    calculationInput.value[calculationInput.value.length - 1] != "/" &&
    calculationInput.value[calculationInput.value.length - 1] != "*" &&
    calculationInput.value[calculationInput.value.length - 1] != "-" &&
    calculationInput.value[calculationInput.value.length - 1] != "+" &&
    calculationInput.value[calculationInput.value.length - 1] != "."
  )
    calculationInput.value = calculationInput.value + "-";
});
document.getElementById("totalBtn").addEventListener("click", () => {
  if (
    calculationInput.value[calculationInput.value.length - 1] != "%" &&
    calculationInput.value[calculationInput.value.length - 1] != "/" &&
    calculationInput.value[calculationInput.value.length - 1] != "*" &&
    calculationInput.value[calculationInput.value.length - 1] != "-" &&
    calculationInput.value[calculationInput.value.length - 1] != "+" &&
    calculationInput.value[calculationInput.value.length - 1] != "."
  )
    calculationInput.value = calculationInput.value + "+";
});
document.getElementById("equalBtn").addEventListener("click", () => {
  taskInput.value = calculationInput.value;
  calculationInput.value = eval(calculationInput.value);
  checkInputLength(calculationInput.value.length);
});
document.getElementById("dotBtn").addEventListener("click", () => {
  if (
    calculationInput.value[calculationInput.value.length - 1] != "%" &&
    calculationInput.value[calculationInput.value.length - 1] != "/" &&
    calculationInput.value[calculationInput.value.length - 1] != "*" &&
    calculationInput.value[calculationInput.value.length - 1] != "-" &&
    calculationInput.value[calculationInput.value.length - 1] != "+" &&
    calculationInput.value[calculationInput.value.length - 1] != "."
  )
    calculationInput.value = calculationInput.value + ".";
});
function checkInputLength(inputlen) {
  if (inputlen > 10 && inputlen <= 15) {
    calculationInput.style.fontSize = "35px";
  } else if (inputlen > 15) {
    calculationInput.style.fontSize = "20px";
  } else {
    calculationInput.style.fontSize = "50px";
  }
}
