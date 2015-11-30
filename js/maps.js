var jabar=new google.maps.LatLng(-6.9032739,107.5731165);
var jakarta= new google.maps.LatLng(-6.2293867,106.6894293);
var jateng= new google.maps.LatLng(-7.3030411,109.0019967);
var jambi= new google.maps.LatLng(-1.7525674,101.6714816);
var jateng= new google.maps.LatLng(-7.3030411,109.0019967);
var jatim= new google.maps.LatLng(-7.6196134,111.3381827);
var yogyakarta= new google.maps.LatLng(-7.803164,110.3398252);
var bali= new google.maps.LatLng(-8.4543385,114.5110274);
var ntb=new google.maps.LatLng(-8.5906453,116.4566959);
var ntt=new google.maps.LatLng(-9.5228988,119.8147964);
var maluku= new google.maps.LatLng(-3.7468431,126.7041585);
var papuabarat= new google.maps.LatLng(-1.6175776,130.0338422);
var papua=new google.maps.LatLng(-4.8482924,133.3087428);
var malukuutara=new google.maps.LatLng(0.3943875,125.753993);
//sulsel
var sulut =new google.maps.LatLng(2.5237219,122.178502);
var sulbar =new google.maps.LatLng(-2.813456, 119.232076);
var sulteng= new google.maps.LatLng(-1.406507, 121.350236);//blm
var sultengg= new google.maps.LatLng(-4.105682, 122.075275);
var sulsel= new google.maps.LatLng(-3.596254, 120.084581);
var gorontalo=new google.maps.LatLng(0.721164, 122.390256);
//kalimantan
var kalut =new google.maps.LatLng(2.7279972,115.1511898);
var kalbar =new google.maps.LatLng(-3.106136, 115.323876);
var kalteng = new google.maps.LatLng(-1.625663, 113.273269);//blm
var kalsel=new google.maps.LatLng(-3.062254, 115.307397);
var kaltim =new google.maps.LatLng(0.603868, 116.460966);
//sumatra
var sumut =new google.maps.LatLng(2.005570, 99.112642);
var sumbar=new google.maps.LatLng(-3.346058, 103.916659);
var sumsel=new google.maps.LatLng(-3.302187, 103.845247);//blm
var aceh=new google.maps.LatLng(4.708300, 96.774579);
var riau= new google.maps.LatLng(0.298037, 101.682171);
var lampung=new google.maps.LatLng(-4.572643, 105.446186);
var banten=new google.maps.LatLng(-6.404830, 106.129367);

function initialize()
{
var mapProp = {
  center: new google.maps.LatLng(-2.401183, 116.543652),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
//jabar
var markerjabar=new google.maps.Marker({
  position:jabar,
  animation:google.maps.Animation.BOUNCE
  });
markerjabar.setMap(map);
var infowindow = new google.maps.InfoWindow({
content:"Jawa Barat"
});
infowindow.open(map,markerjabar);

google.maps.event.addListener(markerjabar, 'click', function() {
  window.location.href = "#page1"
});
//jakarta
var markerjakarta=new google.maps.Marker({
  position:jakarta,
  animation:google.maps.Animation.BOUNCE
  });
markerjakarta.setMap(map);
  var infowindow = new google.maps.InfoWindow({
  content:"Jakarta"
});
infowindow.open(map,markerjakarta);

google.maps.event.addListener(markerjakarta, 'click', function() {
  window.location.href = "#page2"
});

//jambi
var markerjambi=new google.maps.Marker({
  position: jambi,
  animation:google.maps.Animation.BOUNCE
  });
markerjambi.setMap(map);
var infowindow = new google.maps.InfoWindow({
content:"Jambi"
});
infowindow.open(map,markerjambi);

google.maps.event.addListener(markerjambi, 'click', function() {
  window.location.href = "#page3"
});
//jateng
var markerjateng=new google.maps.Marker({
  position: jateng,
  animation:google.maps.Animation.BOUNCE
  });
markerjateng.setMap(map);
var infowindow = new google.maps.InfoWindow({
content:"Jawa Tengah"
});
infowindow.open(map,markerjateng);

google.maps.event.addListener(markerjateng, 'click', function() {
  window.location.href = "#page4"
});

//jatim
var markerjatim=new google.maps.Marker({
  position: jatim,
  animation:google.maps.Animation.BOUNCE
  });
markerjatim.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Jawa Timur"
});
infowindow.open(map,markerjatim);

google.maps.event.addListener(markerjatim, 'click', function() {
  window.location.href = "#page5"
});
//yogyakarta
var markeryogyakarta=new google.maps.Marker({
  position: yogyakarta,
  animation:google.maps.Animation.BOUNCE
  });
markeryogyakarta.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Yogyakarta"
});
infowindow.open(map,markeryogyakarta);

google.maps.event.addListener(markeryogyakarta, 'click', function() {
  window.location.href = "#page6"
});
//bali
var markerbali=new google.maps.Marker({
  position: bali,
  animation:google.maps.Animation.BOUNCE
  });
markerbali.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Bali"
});
infowindow.open(map,markerbali);

google.maps.event.addListener(markerbali, 'click', function() {
  window.location.href = "#page7"
});
//ntb
var markerntb=new google.maps.Marker({
  position: ntb,
  animation:google.maps.Animation.BOUNCE
  });
markerntb.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Nusa Tengara Barat"
});
infowindow.open(map,markerntb);

google.maps.event.addListener(markerntb, 'click', function() {
  window.location.href = "#page8"
});

//ntt
var markerntt=new google.maps.Marker({
  position: ntt,
  animation:google.maps.Animation.BOUNCE
  });
markerntt.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Nusa Tengara Timur"
});
infowindow.open(map,markerntt);

google.maps.event.addListener(markerntt, 'click', function() {
  window.location.href = "#page9"
});
//maluku
var markermaluku=new google.maps.Marker({
  position: maluku,
  animation:google.maps.Animation.BOUNCE
  });
markermaluku.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Maluku"
});
infowindow.open(map,markermaluku);

google.maps.event.addListener(markermaluku, 'click', function() {
  window.location.href = "#page10"
});
//papuabarat
var markerpapuabarat=new google.maps.Marker({
  position: papuabarat,
  animation:google.maps.Animation.BOUNCE
  });
markerpapuabarat.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Papua Barat"
});
infowindow.open(map,markerpapuabarat);

google.maps.event.addListener(markerpapuabarat, 'click', function() {
  window.location.href = "#page11"
});
//papua
var markerpapua=new google.maps.Marker({
  position: papua,
  animation:google.maps.Animation.BOUNCE
  });
markerpapua.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Papua"
});
infowindow.open(map,markerpapua);

google.maps.event.addListener(markerpapua, 'click', function() {
  window.location.href = "#page12"
});

//maluku utara
var markermalukuutara=new google.maps.Marker({
  position: malukuutara,
  animation:google.maps.Animation.BOUNCE
  });
markermalukuutara.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Maluku Utara"
});
infowindow.open(map,markermalukuutara);

google.maps.event.addListener(markermalukuutara, 'click', function() {
  window.location.href = "#page13"
});
//sulut
var markersulut=new google.maps.Marker({
  position: sulut,
  animation:google.maps.Animation.BOUNCE
  });
markersulut.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Sulawesi Utara"
});
infowindow.open(map,markersulut);

google.maps.event.addListener(markersulut, 'click', function() {
  window.location.href = "#page14"
});

//sulbar
var markersulbar=new google.maps.Marker({
  position: sulbar,
  animation:google.maps.Animation.BOUNCE
  });
markersulbar.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Sulawesi Barat"
});
infowindow.open(map,markersulbar);

google.maps.event.addListener(markersulbar, 'click', function() {
  window.location.href = "#page15"
});
//sulteng
var markersulteng=new google.maps.Marker({
  position: sulteng,
  animation:google.maps.Animation.BOUNCE
  });
markersulteng.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Sulawesi Tengah"
});
infowindow.open(map,markersulteng);

google.maps.event.addListener(markersulteng, 'click', function() {
  window.location.href = "#page16"
});
//sultengg
var markersultengg=new google.maps.Marker({
  position: sultengg,
  animation:google.maps.Animation.BOUNCE
  });
markersultengg.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Sulawesi Tenggara"
});
infowindow.open(map,markersultengg);

google.maps.event.addListener(markersultengg, 'click', function() {
  window.location.href = "#page17"
});
//sulsel
var markersulsel=new google.maps.Marker({
  position: sulsel,
  animation:google.maps.Animation.BOUNCE
  });
markersulsel.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Sulawesi Selatan"
});
infowindow.open(map,markersulsel);

google.maps.event.addListener(markersulsel, 'click', function() {
  window.location.href = "#page17"
});
//gorontalo
var markergorontalo=new google.maps.Marker({
  position: sulsel,
  animation:google.maps.Animation.BOUNCE
  });
markersulsel.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Sulawesi Selatan"
});
infowindow.open(map,markersulsel);

google.maps.event.addListener(markersulsel, 'click', function() {
  window.location.href = "#page17"
});


//kalut
var markerkalut=new google.maps.Marker({
  position: kalut,
  animation:google.maps.Animation.BOUNCE
  });
markerkalut.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Kalimantan Utara"
});
infowindow.open(map,markerkalut);

google.maps.event.addListener(markerkalut, 'click', function() {
  window.location.href = "#page15"
});
//sulut
var markersumut=new google.maps.Marker({
  position: sumut,
  animation:google.maps.Animation.BOUNCE
  });
markersumut.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Sumatra Utara"
});
infowindow.open(map,markersumut);

google.maps.event.addListener(markersumut, 'click', function() {
  window.location.href = "#page15"
});
//sumbar
var markersumbar=new google.maps.Marker({
  position: sumbar,
  animation:google.maps.Animation.BOUNCE
  });
markersumbar.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Sumatra Barat"
});
infowindow.open(map,markersumbar);

google.maps.event.addListener(markersumbar, 'click', function() {
  window.location.href = "#page15"
});


//kalbar
var markerkalbar=new google.maps.Marker({
  position: kalbar,
  animation:google.maps.Animation.BOUNCE
  });
markerkalbar.setMap(map);

var infowindow = new google.maps.InfoWindow({
content:"Kalimantan Barat"
});
infowindow.open(map,markerkalbar);

google.maps.event.addListener(markerkalbar, 'click', function() {
  window.location.href = "#page15"
});


//end

}
google.maps.event.addDomListener(window, 'load', initialize);
