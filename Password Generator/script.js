let display=document.querySelector('p');
let button=document.querySelector('button');

button.addEventListener('click',(e)=>{
    let input="";
    input+=String.fromCharCode(Math.random()*(90-65)+65);
    input+=String.fromCharCode(Math.random()*(122-97)+97);
    input+=String.fromCharCode(Math.random()*(38-33)+33);
    input+=String.fromCharCode(Math.random()*(122-97)+97);
    input+=String.fromCharCode(Math.random()*(122-97)+97);
    input+=String.fromCharCode(Math.random()*(38-33)+33);
    input+=String.fromCharCode(Math.random()*(38-33)+33);
    input+=String.fromCharCode(Math.random()*(90-65)+65);
    input+=String.fromCharCode(Math.random()*(38-33)+33);
    input+=String.fromCharCode(Math.random()*(122-97)+97);
    input+=String.fromCharCode(Math.random()*(122-97)+97);
    input+=String.fromCharCode(Math.random()*(38-33)+33);
    input+=String.fromCharCode(Math.random()*(122-97)+97);
    display.innerText=input;
});