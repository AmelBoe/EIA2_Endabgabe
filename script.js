//const video = document.getElementById("Ballerina");


//console.log(video);

let hintergrund = ["./BallerinaEIA2_00000.png", "./BallerinaEIA2_00001.png", "./BallerinaEIA2_00002.png", "./BallerinaEIA2_00003.png", "./BallerinaEIA2_00004.png", "./BallerinaEIA2_00005.png", "./BallerinaEIA2_00006.png", "./BallerinaEIA2_00007.png", "./BallerinaEIA2_00008.png", "./BallerinaEIA2_00009.png", "./BallerinaEIA2_00010.png"]
let intervall1;
//let hintergrund1= document.createElement("a-image");
let count  = 0;

function bildwechsel(){
    let hintergrund1 = document.createElement("a-image"); 
    hintergrund1.setAttribute("src", hintergrund[intervall1]);
    count++;  //Counter wird bei jedem Aufrufen der Funktion um 1 erhöht 
if(count==10){ 
    count = 0 // wenn Funktion 6-mal aufgerufen wurde (count=6), ist das Array "hintergrund" einmal durch und es soll wieder von vorne begonnen werden (Rücksetzung des Counters auf 0)
}

document.querySelector("#marker").appendChild(hintergrund1); //Hinzufügen von "hintergrund1" zum body

}

//Intervall Hintergrund
intervall1 = setInterval(() => {
    
    console.log("intervall Hintergründe" );
    bildwechsel();
    
}, 600);
//document.querySelector()