ref();

function ref() {
  switch(window.location.hash) {
    case "#":
    case "":
      document.getElementById("main").style.display = "";
      document.getElementById("settings").style.display = "none";
    return; 
    case "#settings": 
      document.getElementById("main").style.display = "none";
      document.getElementById("settings").style.display = "";
      document.getElementById("name").value = (localStorage.getItem("name") || "");
      document.getElementById("enwe").value = (localStorage.getItem("enwe") || "false");
      if (document.getElementById("enwe").value !== "true") {
        document.getElementById("weather-settings-container").style.display = "none";
      } else {
        document.getElementById("weather-settings-container").style.display = "inline-block";
        document.getElementById("wid").value = (localStorage.getItem("wid") || "");
        document.getElementById("wm").value = (localStorage.getItem("wm") || "imperial");
      }
      document.getElementById("bg").value = (localStorage.getItem("bg") || "black");
      if (document.getElementById("bg").value !== "randomFromWH") {
        document.getElementById("wh-container").style.display = "none";
      } else {
        document.getElementById("wh-container").style.display = "inline-block";
        document.getElementById("wh").value = (localStorage.getItem("wh") || "");
        document.getElementById("nw").value = (localStorage.getItem("nw") || "true");
      }
    return;
  }
}

function save(id, data) {
  if (id == "name" && data == "> welcome" || id == "wid" && data == "5110629" || id == "wm" && data == "imperial" || id == "bg" && data == "black" || id == "wh" && data == "sky") {
    if (localStorage.getItem(id)) localStorage.removeItem(id); 
    return;
  }
  if (data == "") return;
  localStorage.setItem(id, data);
}