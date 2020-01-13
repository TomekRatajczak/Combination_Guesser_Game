const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let gamePlay = false;
button.addEventListener("click", function(){
    if(!gamePlay){
        gamePlay = true;
        score = 0;
        message.innerHTML = "Guesses the Combo";
        gameArea.innerHTML = "";
        maker();
        button.innerHTML = "Check Combo";
    }else{
        score++;
        message.innerHTML = "Guesses: "+score+" times";
        const numbers = document.querySelectorAll(".numb");
        let winCondition = 0;
        for(let i=0;i<numbers.length;i++){
            if(numbers[i].value == numbers[i].correct){
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                winCondition++
            }else{
                let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "white";
            }
            if(winCondition == numbers.length){
                gameEnd()
            }
        }
    }
})

function gameEnd(){
    message.innerHTML = "You solved the combo in "+score+" guesses";
    gamePlay = false;
    button.innerHTML = "Restart Game";
}

function maker(){
    for(let x=0;x<5;x++){
        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.style.width = "50px";
        el.style.margin = "5px";
        el.classList.add("numb");
        el.value = 0;
        el.order = 0;
        el.correct = Math.floor(Math.random()*10);
        gameArea.appendChild(el);
    }
}