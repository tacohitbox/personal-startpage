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
x.open("GET", "http://localhost:9090/weather");
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
