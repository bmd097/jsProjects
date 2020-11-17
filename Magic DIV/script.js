let magicDiv=document.querySelector("div");
magicDiv.addEventListener("click",e => {
    let nooftextarea=document.querySelectorAll("textarea");
    if(nooftextarea.length==0){
        let words=magicDiv.innerText;
        magicDiv.innerHTML=`<textarea name="" id="" cols="30" rows="10">${words}</textarea>`;
        let textarea=document.querySelector("textarea");
        textarea.style.width="80%";
        textarea.style.height="80%";
        textarea.style.outline="none";
        textarea.style.border="none";
        textarea.style.fontSize="30px";
        textarea.style.fontFamily="sans-serif";
        textarea.addEventListener("blur",()=>{
            magicDiv.innerHTML=textarea.value;
            localStorage.setItem('key',textarea.value);
        });
    }
});
if(localStorage.getItem('key')) magicDiv.innerText=localStorage.getItem('key');
