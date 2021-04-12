const hit = () =>{
    let input_par = document.getElementById('par').value;
    let input_stroke = document.getElementById('strokes').value;
    let golf = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Doble Bogey", "Go Home!"];
    const play = (par, strokes) => {

    return (strokes == 1)?
	document.getElementById("return").innerHTML = golf[0]:
    (strokes <= par -2)?
	document.getElementById("return").innerHTML = golf[1]:
    (strokes == par -1)?
	document.getElementById("return").innerHTML = golf[2]:
    (strokes == par)?
	document.getElementById("return").innerHTML = golf[3]:
    (strokes == par +1)?
	document.getElementById("return").innerHTML = golf[4]:
    (strokes == par +2)?
	document.getElementById("return").innerHTML = golf[5]:
    	document.getElementById("return").innerHTML = golf[6];
}
    result = play(input_par,input_stroke);
    document.querySelector("#return").textContent = result;
}
function restart() {
    document.getElementById('par').value = " ";
    document.getElementById('strokes').value = " ";
    document.querySelector("#return").textContent = " ";
 }
