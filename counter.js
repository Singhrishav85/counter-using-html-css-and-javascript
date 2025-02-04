let number = document.getElementById("number");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");

function incr() {
  let number = document.getElementById("number");
  if (number.innerText == "0") {
    for (let i = number.innerText + 1; i <= 100000; i++) {
      setTimeout(() => {
        number.innerHTML = i;
      }, 1000 * i);
    }
  }
}

function resets() {
  number.innerHTML = "0";
}

function decr() {
  let number = document.getElementById("number");
  if (number != "0") {
    for (let i = number.innerText - 1; i >= 0; i--) {
      setTimeout(() => {
        number.innerText = i;
      }, (number.innerText - i - 1) * 1000);
    }
  }
}

function stop()
{
    let number=document.getElementById("number");
    // let s=number.innerText;
    // let r=parseInt(s);
    // // number.innerText=
    // // console.log(number.innerText);
    // // console.log(s);
    // number.innerText=r;
    // // console.log(r);
    number.innerText=number.innerText;
}