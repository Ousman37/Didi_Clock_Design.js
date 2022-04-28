let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
  // Digital clock

  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();

  let am = h >= 12 ? "PM" : "AM";
  // convert 24hr clock to 12hr clock
  if (h > 12) {
    h = h - 12;
  }

  // add zero before single digit number
  h = h < 10 ? "0" + h : h;
  M = M < 10 ? "0" + M : M;
  S = S < 10 ? "0" + S : S;

  hours.innerHTML = h;
  minutes.innerHTML = M;
  seconds.innerHTML = S;
  ampm.innerHTML = am;
});
