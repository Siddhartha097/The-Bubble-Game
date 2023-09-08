let timer = 60;
let point = 0;
const pbtm = document.querySelector("#panelbtm");
let rn = 0;

const incrScore = () => {
    point += 10;
    document.querySelector('#points').textContent = point;
}

const makeBubble = () => {
    let count ="";

    for (let i = 1; i <= 160; i++) {
        let rn = Math.floor(Math.random() * 10);
        count += `<div class="bubble">${rn}</div>`;
}

pbtm.innerHTML = count;  
}

const timerRun = () => {
    let timerVal = timer;
    let count = setInterval(() => {
        if (timerVal > 0){
            timerVal--;
            document.querySelector('#timer').textContent = timerVal;
        } else {
            clearInterval(count);   
            pbtm.innerHTML = `<h1>Game Over!! Want to <h1><div id="btnbox">
                    <button class="btn">Play Again?</button>
                    </div>`;
                    document.querySelector('.btn').addEventListener("click", ()=>{
                        timerVal = timer;  
                        game();
                    })
        }
    }, 1000)
}

const gethit = () => {
    rn = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = rn;
}

pbtm.addEventListener("click", (details) => {
    if (rn === Number(details.target.textContent)){
        incrScore();
        makeBubble();
        gethit();
    }
})


pbtm.innerHTML = `<button class="startbtn">Start Game</button>`;

document.querySelector('.startbtn').addEventListener("click", ()=>{
    timerVal = timer;  
    game();
})

const game = () => {
    
    timerRun();
    makeBubble();
    gethit();
}