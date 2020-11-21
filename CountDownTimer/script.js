let statusCounter=false;
let input=document.getElementById('input');
let alerti=document.querySelector('.alert');
document.querySelector('button').addEventListener('click',()=>{
    if(input.value==='') return;
    if(statusCounter) {
        alerti.classList.add('show');
        setTimeout(()=>{
            alerti.style.animation="jiggle ease-out 0.3s 1";
        },210);
        setTimeout(()=>{
            alerti.style.animation="";
            alerti.classList.remove('show');
        },3000);
        return;
    }
    let inputField=parseInt(input.value);
    let start=1;
    let outputFields=document.querySelectorAll('.display div p');
    let intervalID=setInterval(()=>{
        let temp=start;
        let i=2;
        statusCounter=true;
        while(temp!=0){
            let d=temp%10;
            outputFields[i--].innerText=d;
            temp=parseInt(temp/10+"");
        }
        if(start===inputField){
            clearInterval(intervalID);
            input.value="";
            setTimeout(()=>{
                for(let key in outputFields) outputFields[key].innerText=0;
            },1000);
            statusCounter=false;
            return;
        }
        start++;
    },1000);
});