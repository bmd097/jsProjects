let display=document.querySelector('section');
let url=`information.txt`;
// http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=<Enter api key>
// http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=<Enter api key>
function generateNews(){
    fetch(url).then(response=>response.json()).then(data=>{
        display.innerHTML="";
        for(let i=0;i<9;i++){
            console.log(data['articles'][i]);
            let div=document.createElement('div');
            div.classList.add('news-card');
            div.innerHTML=`<h2>${data['articles'][i]['title']}</h2>
                    <p>${data['articles'][i]['description']}</p>
                    <a href="${data['articles'][i]['url']}" target="_blank">Read More!</a>
                    <p>${data['articles'][i]['source']['name']}</p>`;
            div.style.background=`url(${data['articles'][i]['urlToImage']}) center`;
            div.style.backgroundSize='cover';
            display.appendChild(div);
        }
    });
}