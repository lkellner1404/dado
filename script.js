const btn = document.getElementById("roll");
const face = document.getElementById("face");

function rollDice(){
    let rolled = Math.ceil( Math.random() * 6 );
    // face.innerHTML = `${rolled}`
    console.log(`El dado dio ${rolled}`);
    face.innerHTML = "";
    face.className = `face${rolled}`;
    for (let i = 1; i <= rolled; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.style.gridArea = `d${i}`;
        face.appendChild(dot);
        // console.log(`El conteo va ${i}`)
    }
    for (let i = 9; i > rolled; i--){
        const blank = document.createElement("div");
        blank.className = "blank";
        blank.style.gridArea = `b${i}`;
        face.appendChild(blank);
    }
} 



btn.addEventListener("click",rollDice);
  