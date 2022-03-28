var scr = document.createElement("style");
scr.innerHTML = ".ns {display:inline-block !important;}";
document.querySelector("body").append(scr);

var w = [
  "i'm inside your walls",
  "what's up stinkass",
  "howdy howdy howdy",
  "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
  "hey bitch",
  "hello who're"
]

document.getElementById("wel").innerHTML = w[Math.floor(Math.random() * w.length)];
if (localStorage.getItem("name")) {
  document.title = localStorage.getItem("name");
  document.getElementById("tline").innerHTML = localStorage.getItem("name");
}

if (localStorage.getItem("enwe") == "true") {
  if (localStorage.getItem("t") && localStorage.getItem("w")) {
    document.getElementById("wl").style.display = "block";
    document.getElementById("wpb").style.display = "none";
    document.getElementById("wl").innerHTML = `it's currently ${localStorage.getItem("t")} degrees with some ${localStorage.getItem("w")} outside.`;
  } else {
    document.getElementById("wpb").style.display = "";
  }
}

if (localStorage.getItem("bg") == "randomFromWH" && localStorage.getItem("bg-content") && localStorage.getItem("nw") == "false") {
  document.querySelector(".bg-img").src = localStorage.getItem("bg-content");
  document.querySelector(".bg-img").addEventListener("load", function() {
    document.querySelector(".bg-img").style = "opacity: 1;"
    document.querySelector(".home").classList.add("a-bit-trans");
  });
}

if (localStorage.getItem("enwe") == "true") {
  document.getElementById("wpb").style.width = "15%";
  var wid = (localStorage.getItem("wid") || "5110629");
  if (localStorage.getItem("wm")) wid = `${wid}?measure=${localStorage.getItem("wm")}`;
  var w = new XMLHttpRequest();
  w.open("GET", `https://se.tacohitbox.com/weather/${wid}`);
  w.send();
  w.onreadystatechange = function() {
    if (w.readyState == 1) {
      document.getElementById("wpb").style.width = "25%";
    } else if (w.readyState == 2) {
      document.getElementById("wpb").style.width = "50%";
    } else if (w.readyState == 3) {
      document.getElementById("wpb").style.width = "75%";
    } else if (w.readyState == 4) {
      document.getElementById("wpb").style.width = "100%";
      document.getElementById("wpb").style.background = "#2cb67d";
      document.getElementById("wpb").style.color = "black";
    }
  };
  w.onload = function() {
    setTimeout(function() {
      document.getElementById("wl").style.display = "block";
      document.getElementById("wpb").style.display = "none";
      var b = JSON.parse(w.responseText).data;
      document.getElementById("wl").innerHTML = `it's currently ${b.current.temp.toFixed(0)} degrees with some ${b.current.weather[0].description} outside.`;
      localStorage.setItem("t", b.current.temp.toFixed(0));
      localStorage.setItem("w", b.current.weather[0].description);
    }, 500);
  }
} 

if (localStorage.getItem("bg") == "randomFromWH" && localStorage.getItem("nw") == "true" || localStorage.getItem("nw") == null) {
  document.querySelector(".bg-img").style = "opacity: 0;";
  var x = new XMLHttpRequest();
  x.open("GET", `https://se.tacohitbox.com/wall?q=${(localStorage.getItem("wh") || "sky")}`);
  x.send();
  x.onload = function() {
    var b = JSON.parse(x.responseText);
    if (b.success == true) {
      document.querySelector(".bg-img").src = `https://se.tacohitbox.com/wp?url=${encodeURIComponent(b.data)}`;
      localStorage.setItem("bg-content", `https://se.tacohitbox.com/wp?url=${encodeURIComponent(b.data)}`)
      document.querySelector(".bg-img").addEventListener("load", function() {
        document.querySelector(".bg-img").style = "opacity: 1;";
        document.querySelector(".home").classList.add("a-bit-trans");
      });
    }
  }
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