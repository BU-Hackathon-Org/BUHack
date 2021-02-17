var center=[28.45,77.5843];
var mymap=L.map("map").setView(center,13);
var marker = L.marker(center).addTo(mymap);
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom:18,
    id:"mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:"pk.eyJ1IjoiYnVoYWNrIiwiYSI6ImNrbDliM3NwMTJkdXEycXFqaTR0OWVlajYifQ.n4n7zz_ENYkTPZZwv9S8gQ"}).addTo(mymap);var marker=L.marker(center).addTo(mymap);marker.bindPopup("<b>BU'Hack</b> 2021 <br>Bennett University, Greater Noida").openPopup();var textWrapper=document.querySelector(".ml7 .letters");textWrapper.innerHTML=textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g,"<span class='letter'>$&</span>"),anime.timeline({loop:!1}).add({targets:".ml7 .letter",translateY:["1.1em",0],translateX:["0.55em",0],translateZ:0,rotateZ:[180,0],duration:1250,easing:"easeOutExpo",delay:function(e,a){return 2009+50*a}});