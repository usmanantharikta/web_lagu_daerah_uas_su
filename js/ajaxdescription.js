//<!--1. ajax manukdadali description -->
//  <script>
function manukdadali() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/ManukDadali.html", true);
xhttp.send();
}
//</script>

//<!-- 2. ajax Bubuybulan description -->
//  <script>
function BubuyBulan() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/BubuyBulan.html", true);
xhttp.send();
}
//</script>

//<!--3. ajax Es lilin description -->
//  <script>
function EsLilin() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/EsLilin.html", true);
xhttp.send();
}
//</script>

//4. ajax cingcangkling
function CingCangkling() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/CingCangkling.html", true);
xhttp.send();
}
//5. ajax PanonHideung
function PanonHideung() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/PanonHideung.html", true);
xhttp.send();
}

//6. ajax WarungPojok
function WarungPojok() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/WarungPojok.html", true);
xhttp.send();
}

//7. ajax tokecang
function Tokecang() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/Tokecang.html", true);
xhttp.send();
}

//8. ajax bajing luncat
function BajingLuncat() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/BajingLuncat.html", true);
xhttp.send();
}

//9. Pileuleuyan
function Pileuleuyan() {
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    document.getElementById("desciption").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "pages/jabar/Pileuleuyan.html", true);
xhttp.send();
}
