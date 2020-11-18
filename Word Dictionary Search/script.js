let input=document.getElementById('input');
let display=document.getElementById('display');
let url=(input)=> `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value.toLowerCase()}`;
function search(){
    // if(input.value!=''){
    //     if(input.value.toLowerCase()===wordData['word']){
    //         display.innerText="";
    //         for(let index in wordData['results']){
    //             display.innerText+=`| ${wordData['results'][index]['definition']}`;
    //         }
    //     }
    //     else display.innerText='NOT FOUND ANYTHING';
    // }
    if(input.value!=''){
        fetch(url(input))
            .then(response=>response.json())
            .then(data=>{
                if(data[0]===undefined){
                    display.innerText='NOT FOUND ANYTHING';
                }else{
                    display.innerText="";
                    for(let index in data[0]['meanings'])
                    display.innerText+=" "+(data[0]['meanings'][index]['definitions'][0]['definition']);
                }
            });
    }
}
document.addEventListener('keypress',e=>{
    if(e.key==='Enter') search();
})
// let wordData;
// function initialize(){
//     let request=new XMLHttpRequest();
//     request.open('GET','wordapi.txt',true);
//     request.onload=function(){
//         wordData=JSON.parse(request.responseText);
//     };
//     request.send();
// }
// initialize();