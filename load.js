var w = [
  "welcome :3",
  "what's up stinkass",
  "howdy howdy howdy",
  "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
  "hey bitch",
  "hello who're"
]

document.getElementById("wel").innerHTML = w[Math.floor(Math.random() * w.length)];

if (localStorage.getItem("t") && localStorage.getItem("w")) {
  document.getElementById("wl").style.display = "block";
  document.getElementById("wpb").style.display = "none";
  document.getElementById("wl").innerHTML = `it's currently ${localStorage.getItem("t")} degrees with some ${localStorage.getItem("w")} outside.`;
}

setInterval(function() {
  if (document.getElementById("tline").innerHTML.includes("_")) {
    document.getElementById("tline").innerHTML = document.getElementById("tline").innerHTML.substring(0, document.getElementById("tline").innerHTML.length - 2);
  } else {
    document.getElementById("tline").innerHTML = `${document.getElementById("tline").innerHTML} _`;
  }
}, 400)

document.getElementById("wpb").style.width = "15%";
var x = new XMLHttpRequest();
x.open("GET", "https://se.tacohitbox.com/weather/5110629");
x.send();
x.onreadystatechange = function() {
  if (x.readyState == 1) {
    document.getElementById("wpb").style.width = "25%";
  } else if (x.readyState == 2) {
    document.getElementById("wpb").style.width = "50%";
  } else if (x.readyState == 3) {
    document.getElementById("wpb").style.width = "75%";
  } else if (x.readyState == 4) {
    document.getElementById("wpb").style.width = "100%";
    document.getElementById("wpb").style.background = "#2cb67d";
    document.getElementById("wpb").style.color = "black";
  }
};
x.onload = function() {
  setTimeout(function() {
    document.getElementById("wl").style.display = "block";
    document.getElementById("wpb").style.display = "none";
    var b = JSON.parse(x.responseText);
    document.getElementById("wl").innerHTML = `it's currently ${b.data.current.temp.toFixed(0)} degrees with some ${b.data.current.weather[0].description} outside.`;
    localStorage.setItem("t", b.data.current.temp.toFixed(0));
    localStorage.setItem("w", b.data.current.weather[0].description);
  }, 500)
}

// some code was stolen from https://github.com/migueravila/Bento/blob/master/assets/js/time.js
// mainly out of laziness

var m = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

setInterval(function() {
  var d = new Date();
  var mm = m[d.getMonth()];
  var dd = d.getDate();
  var min = (mins = ('0' + d.getMinutes()).slice(-2));
  var sec = (secs = ('0' + d.getSeconds()).slice(-2)); // hehe secs
  var h = d.getHours();
  var ap = h >= 12 ? 'pm' : 'am';
  // replace with `ap = ""` if you don't want am/pm displayed]
  h = h % 12;
  h = h ? h : 12;
  // comment out the previous 2 lines for 24 hour time

  document.getElementById("time").innerHTML = `${mm} ${dd} @ ${h}:${min}:${sec}${ap}`;
}, 1); // feel free to change this, it's only because i want my clock on my taskbar to match