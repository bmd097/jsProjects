const state={
    values:[]
}
let input=document.querySelector(".add input");
function addToDoCard(){
    if(input.value!==''){
        let display=document.querySelector("#display");
        let displayCard=document.createElement("div");
        displayCard.classList.add("todo-card");
        displayCard.innerHTML=`<input type="checkbox"><p>${input.value}</p>`;
        let deletebtn=document.createElement("p");
        deletebtn.innerHTML=`<i class="fa fa-times" aria-hidden="true"></i>`;
        deletebtn.addEventListener("click",(e)=>{
            displayCard.style.overflow="hidden";
            displayCard.style.width="0px";
            state.values=state.values.filter(val=>val!==displayCard.childNodes[1].innerText);
            setTimeout(()=>{displayCard.remove();},100);           
            document.querySelector("footer button").style.display="block";
        });
        deletebtn.classList.add("deletebtn");
        displayCard.appendChild(deletebtn);
        displayCard.onmouseover=function(){
            deletebtn.style.transform="scale(1)";
        }
        displayCard.onmouseout=function(){
            deletebtn.style.transform="scale(0)";
        }
        display.insertBefore(displayCard,display.childNodes[0]); 
        state.values.push(input.value.toUpperCase());
        input.value="";
        document.querySelector("footer button").style.display="block";
    }
}
function initialize(){
    const arr=JSON.parse(localStorage.getItem("key")).values;
    for(let key in arr) {
        input.value=arr[key];
        addToDoCard();
    }
    document.querySelector("footer button").style.display="none";
    setTimeout(()=>{
        document.body.classList.add("view");
    },500);
}
function saveToDisk(){
    localStorage.clear();
    localStorage.setItem("key",JSON.stringify(state));
    document.querySelector("footer button").style.display="none";
}
initialize();