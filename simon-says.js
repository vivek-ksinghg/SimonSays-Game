let gameSeq=[];
let userSeq=[];

let start=false;
let level=0;

let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(start==false){
    console.log("game started");
    start=true;


    levelUp();

    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000/4);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },1000/4);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    // randome btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameSeq.push(randColor)
    console.log(gameSeq)
    gameFlash(randBtn);
}
function checkAns(idx){
        console.log("curr level :", level);
        // let idx=level-1;
        if(userSeq[idx] == gameSeq[idx]){
            if(userSeq.length== gameSeq.length){
                setTimeout(levelUp(),1000);
            }
            console.log("same value");
        }else{
            h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`
            document.querySelector("body").style.backgroundColorcolor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColorcolor="white";
            })
            reset();
        }
}
function btnPress(){
    console.log(this);
   let btn= this;
   userFlash(btn);

  userColor=btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);

checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
