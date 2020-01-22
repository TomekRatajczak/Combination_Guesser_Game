const myWords = ["tomasz", "ratajczak", "junior", "frontend", "javascript", "developer"];
let cur = 0;
let startTime;


window.addEventListener("load", init);

function init(){
    let div = document.createElement("div");
    div.setAttribute("class","message");
    document.body.appendChild(div);
    div.innerText = "Press the Start button";

    let div1 = document.createElement("div");
    div1.setAttribute("class","game");
    document.body.appendChild(div1);

    let button = document.createElement("button");
    button.type = "button";
    document.body.appendChild(button);
    button.innerText = "Start";
    button.addEventListener("click",start);
}

function start(){
    cur = 0;
    startTime = Date.parse(new Date());
    this.style.display = "none";
    let tempArr = myWords.slice(0);
    tempArr.sort(function(a,b){
        return 0.5 - Math.random();
    });
    const game = document.querySelector(".game");
    tempArr.forEach(function(item){
        let temp = item.split("");
        temp.sort(function(a,b){
            return 0.5 - Math.random();
        });
        let temp1 = temp.join("");
        let div = document.createElement("div");
        div.innerText = "?";
        div.classList.add("box");
        div.style.backgroundColor = "red";
        div.word = item;
        div.addEventListener("mouseenter",function(){
            div.style.backgroundColor = "white";
            div.style.cursor = "pointer";
            div.innerText = temp1;
        })
        div.addEventListener("mouseleave",function(){
            div.style.backgroundColor = "red";
            div.innerText = "?";
        })
        div.addEventListener("click",function(){
            if(div.word===myWords[cur]){
                this.classList.add("hidden");
                cur++;
                nextWord();
            }
        })
        game.appendChild(div);
    })
    nextWord();

}

function nextWord(){
    if(cur >= myWords.length){
        let endTime = Date.parse(new Date());
        let duration = (endTime - startTime)/1000;
        message("Game Over<br>You do it in "+duration+" seconds<br><br>Are you ready to invite me for a interview?");
        let button1 = document.createElement("button1");
        button1.type = "button";
        document.body.appendChild(button1);
        button1.innerText = "Contact with Me";
        button1.addEventListener("click",function(){
            message("mail to: tomaszratajczak1988@gmail.com");
            this.style.display = "none";
        })
       
    }else{
        message("Select this Word: "+myWords[cur]);
    }
}

function message(output){
    document.querySelector(".message").innerHTML = output;
}

