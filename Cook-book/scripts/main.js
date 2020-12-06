{
    let input=document.getElementById('search-text');
    let searchList=document.querySelector('.search-list');
    let mainDisplayContent=document.getElementById('display-content');
    let mainDisplayMessage=document.querySelector('.display>p');
    let savedData={
        recipes: []
    };
    let savedList=document.querySelector('.saved-items');


    document.querySelector('.navlinks').children[1].addEventListener('mouseover',function(){
        savedList.style.display='block';
    });
    document.querySelector('.navlinks').children[1].addEventListener('mouseout',function(){
        savedList.style.display='none';
    });
    savedList.addEventListener('mouseover',function(){
        savedList.style.display='block';
    });
    savedList.addEventListener('mouseout',function(){
        savedList.style.display='none';
    });

    loadContent(savedList,savedData,true);
    window.addEventListener('keypress',(e)=>{
        if(e.key==='Enter') searchInput();
    });
    function searchInput(){
        if(input.value.trim()==='') return;
        fetch(`https://forkify-api.herokuapp.com/api/search?q=${input.value}`)
        .then(response=>response.json())
        .then(data=>{
            if(data.error!==undefined) failedLoading(mainDisplayMessage,mainDisplayContent);
            else loadContent(searchList,data);
        });
    }
    let previousDiv=null;
    function loadContent(list,data,check){
        list.innerHTML="";
        for(let i in data["recipes"]){
            let div=document.createElement('div');
            div.className="search-card";
            div.innerHTML=`<img src=${data["recipes"][i]['image_url']} alt="search-card-pic">
            <div class="search-card-info">
                <p>${data["recipes"][i]['title']}</p>
                <p>${data["recipes"][i]['publisher']}</p>
            </div>`;
            div.addEventListener('click',()=>{
                if(previousDiv!=null) previousDiv.classList.remove('search-card-active');
                div.classList.add('search-card-active');
                previousDiv=div;
                loadCard(data["recipes"][i]['recipe_id'],check);
            });
            if(check){
                div.addEventListener('dblclick',()=>{
                    savedData['recipes']=savedData['recipes'].filter(recipe=>
                        recipe['source_url']!=data["recipes"][i]['source_url']
                    );
                    setTimeout(()=>{
                        div.remove();
                        if(savedData['recipes'].length===0) 
                            savedList.innerHTML="<p>Well! You haven't saved yet.</p>";
                    },200);
                });
            }
            list.insertBefore(div,list.children[0]);
        }
        if(check && (data["recipes"].length===0)){
            savedList.innerHTML="<p>Well! You haven't saved yet.</p>";
        }
        
    }
    function loadCard(id,check){
        fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        .then(res=>res.json())
        .then(data=>{
            let titleDiv=document.createElement('div');
            titleDiv.className='menu-title';
            titleDiv.innerHTML=`<img src=${data['recipe']['image_url']} alt="menu-img">
            <h1>${data['recipe']['title']}</h1>`;

            let timeDiv=document.createElement('div');
            timeDiv.className='menu-time';
            timeDiv.innerHTML=`<div class="time-controls">
            <p>You like this one, Bookmark it if you wish!</p>
            </div>
            <button><i class="fa fa-bookmark-o" aria-hidden="true"></i>
                <!-- <i class="fa fa-bookmark" aria-hidden="true"></i> -->
            </button>`;
            timeDiv.children[1].addEventListener('click',()=>{
                savedData['recipes'].push(data['recipe']);
                timeDiv.children[1].remove();
                timeDiv.children[0].innerText='Saved! Double-click in Saved to delete..';
                loadContent(savedList,savedData,true);
            });
            if(check){
                timeDiv.children[1].remove();
                timeDiv.children[0].innerText='Saved! Double-click in Saved to delete..';
            }
            let ingredientsDiv=document.createElement('div');
            ingredientsDiv.className="menu-ingredients";
            ingredientsDiv.innerHTML=`<h4>RECIPE INGREDIENTS</h4>
            <div></div>`;
            for(let i in data['recipe']['ingredients']){
                let p=document.createElement('p');
                p.innerHTML=`<i class="fa fa-check" aria-hidden="true"></i>&nbsp;${data['recipe']['ingredients'][i]}`;
                ingredientsDiv.children[1].insertBefore(p,ingredientsDiv.children[1].children[0]);
            }
            let visitDiv=document.createElement('div');
            visitDiv.className="menu-visit";
            visitDiv.innerHTML=`<h1>HOW TO COOK IT</h1>
            <p>This recipe was carefully designed and tested by ${data['recipe']['publisher']}. Please check out 
            directions at their website.</p>
            <button>DIRECTIONS &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>`;
            visitDiv.children[2].addEventListener('click',()=>{
                window.location.href = `${data['recipe']['source_url']}`;
            })

            mainDisplayContent.innerHTML="";
            mainDisplayContent.appendChild(titleDiv);
            mainDisplayContent.appendChild(timeDiv);
            mainDisplayContent.appendChild(ingredientsDiv);
            mainDisplayContent.appendChild(visitDiv);
            mainDisplayContent.style.display="flex";
            mainDisplayMessage.style.display="none";
        });
    }
    function failedLoading(message,display){
        message.style.display="flex";
        message.innerText='Sorry Failed To Get Menu :(';
        display.style.display='none';
        searchList.innerHTML="";
    }
}
{
    let addRecipeModal=document.getElementById('add_recipe');
    document.querySelector('.navlinks').children[0].addEventListener('click',()=>{
        addRecipeModal.style.display='flex';
        setTimeout(()=>{
            addRecipeModal.children[0].style.transform='scale(1)';
            addRecipeModal.children[0].style.opacity=1;
        },50);
    });
    document.querySelector('.add_recipe>p').addEventListener('click',()=>{
        addRecipeModal.children[0].style.transform='scale(0.8)';
        addRecipeModal.children[0].style.opacity=0;
        setTimeout(()=>addRecipeModal.style.display='none',200);
    });
}
