{/* <div class="note-card">
                <h1 id="title">Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Id, ea?</p>
                <button>Delete Note</button>
            </div> */}
{
    let textarea=document.getElementById("note");
    let display=document.querySelector(".display");
    function addNote(){
        if(textarea.value!==""){
            let noteCard=document.createElement('div');
            let title=document.querySelector(".adder div input");
            noteCard.classList.add('note-card');
            noteCard.innerHTML=`<h1 
            id="title">${title.value===""?'TITLE':title.value.toUpperCase()}</h1>
                                <p>${textarea.value}</p>
                                <button>Delete Note</button>`;
            display.insertBefore(noteCard,display.childNodes[0]);
            noteCard.childNodes[noteCard.childNodes.length-1].addEventListener('click',()=>{
                noteCard.remove();
            });
            textarea.value="";
            title.value="";
        }
    }
}
// Search Logic ----->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
{
    let display=document.querySelector(".display");
    function searchNotes(){
        let searchText=document.querySelector('nav div input');
        if(searchText.value!==''){
            let results = document.querySelector(".results");
            results.style.width="1000px";
            results.style.height="600px";
            results.style.opacity=1;
            // <div class="result-note">
            //         <h1>title</h1>
            //         <p>Lorem ipsum dolor sit amet.</p>
            //     </div>
            for(let index=0;index<display.children.length;index++){
                // console.log(display.children[index]);
                // console.log(display.children[index].children[0].innerHTML);
                if(display.children[index].children[0].innerHTML===searchText.value.toUpperCase()){
                    let resultNote=document.createElement('div');
                    resultNote.classList.add('result-note');
                    resultNote.innerHTML=`<h1>${display.children[index].children[0].innerHTML}</h1>
                             <p>${display.children[index].children[1].innerHTML}</p>`;
                    results.insertBefore(resultNote,results.childNodes[0]);
                }
            }
            results.addEventListener("click",(e)=>{
                results.style.width="0px";
                results.style.height="0px";
                results.style.opacity=0.3;
                results.innerHTML="";
            })
        }
    }
}