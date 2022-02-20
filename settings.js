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
      document.getElementById("wid").value = (localStorage.getItem("wid") || "");
      document.getElementById("wm").value = (localStorage.getItem("wm") || "imperial");
    return;
  }
}

function save(id, data) {
  if (id == "name" && data == "> welcome" || id == "wid" && data == "5110629" || id == "wm" && data == "imperial") {
    if (localStorage.getItem(id)) localStorage.removeItem(id); 
    return;
  }
  if (data == "") return;
  localStorage.setItem(id, data);
}