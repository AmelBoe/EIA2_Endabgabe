


//Button zum 360 Gradbild
  document.querySelector('#button2').addEventListener('click', function() {
    document.querySelector('#operBild').setAttribute('visible', true);
    document.querySelector('#page4').setAttribute('visible', true);
  });

  document.getElementById("websiteButton").addEventListener("click", function () {
    console.log("hallo Welt")
    document.getElementById("fullscreenImage").object3D.visible = true;
    document.querySelector('#page1').setAttribute('visible', false);
}
)

document.getElementById("buttonOper").addEventListener("click", function () {
  console.log("Oper Bild")
 // document.getElementById("fullscreenImage").setAttribute("visible","false");
  document.getElementById("operBild").object3D.visible = true;
  
  //document.getElementById("feldSzene").object3D.visible = true;
}
)


//Wenn man auf "Wo" klickt, wird man zu Google Maps weitergeleitet
document.querySelector('#textWo').addEventListener('click', function() {
  window.open("https://www.google.com/maps/place/Wiener+Staatsoper/@48.2034341,16.3666285,17z/data=!3m2!4b1!5s0x476d079c632e16c7:0x369a4e45f874ca56!4m6!3m5!1s0x476d079c861dbfd5:0xfd59268d25377d56!8m2!3d48.2034306!4d16.3692034!16zL20vMDIxYzh2?entry=ttu", "_blank")
});


//Wenn man über Wo hovert, ändert sich die Schriftfarbe
document.querySelector("#textWo").addEventListener("mouseenter",function(){
  document.querySelector("#textWo").setAttribute("color", "grey")
});
document.querySelector("#textWo").addEventListener("mouseleave",function(){
  document.querySelector("#textWo").setAttribute("color", "#FFF")
});


//wenn man über den Button "Jetzt Karten bestellen" hovert, dann kommt er leicht entgegen
let websiteButton = document.querySelector('#websiteButton');
let textWebsite = document.querySelector('.textWebsite');

websiteButton.addEventListener('mouseenter', function() {
    websiteButton.setAttribute('position', '0 0 -0.15');
    textWebsite.setAttribute('position', '0 0.2 0.05');
});

websiteButton.addEventListener('mouseleave', function() {
    websiteButton.setAttribute('position', '0 0 -0.1');
    textWebsite.setAttribute('position', '0 0.1 0.05');
});