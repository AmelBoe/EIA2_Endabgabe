


//Button zum 360 Gradbild
  document.querySelector('#button2').addEventListener('click', function() {
    document.querySelector('#operBild').setAttribute('visible', true);
    document.querySelector('#page4').setAttribute('visible', true);
  });

  document.getElementById("websiteButton").addEventListener("click", function () {
    console.log("hallo Welt")
   // document.getElementById("fullscreenImage").setAttribute("visible","false");
    document.getElementById("fullscreenImage").object3D.visible = true;
    //document.getElementById("feldSzene").object3D.visible = true;
}
)

document.getElementById("buttonOper").addEventListener("click", function () {
  console.log("Oper Bild")
 // document.getElementById("fullscreenImage").setAttribute("visible","false");
  document.getElementById("operBild").object3D.visible = true;
  
  //document.getElementById("feldSzene").object3D.visible = true;
}
)