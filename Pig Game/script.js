// true for player one / vice-versa
let check=true;
let score1=0;
let score2=0;
let currScore=0;
let player1=document.getElementById('player1');
let player2=document.getElementById('player2');

document.querySelector('.btn-new').addEventListener('click',()=>{
    newGame();
});

function newGame(){
    player1.className='activeplayer';
    player2.className='';
    player1.children[0].innerText=prompt('Enter Name of Player1');
    player2.children[0].innerText=prompt('Enter Name of Player2');
    if(player1.children[0].innerText==='') player1.children[0].innerText='PLAYER 1';
    if(player2.children[0].innerText==='') player2.children[0].innerText='PLAYER 2';
    score1=0;
    score2=0;
    player1.children[1].innerText=score1;
    player2.children[1].innerText=score2;

    currScore=0;
    player1.children[2].innerText=currScore;
    player2.children[2].innerText=currScore;
}

document.querySelector('.btn-roll').addEventListener('click',()=>{
    let dice=(1+parseInt(Math.random()*6));
    document.querySelector('img').src=`images/dice-${dice}.png`;
    currScore+=dice;
    if(check) player1.children[2].innerText=currScore;
    else player2.children[2].innerText=currScore;
});

document.querySelector('.btn-hold').addEventListener('click',()=>{
    if(check){
        player1.children[1].innerText=parseInt(player1.children[1].innerText)+currScore;
        player1.children[2].innerText=0;
    }else{
        player2.children[1].innerText=parseInt(player2.children[1].innerText)+currScore;
        player2.children[2].innerText=0;
    }
    player1.classList.toggle('activeplayer');
    player2.classList.toggle('activeplayer');
    currScore=0;
    check=!check;
});
window.addEventListener('load',()=>{newGame()});