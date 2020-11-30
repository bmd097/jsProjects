{
    let closeBtn=document.querySelector('.modal div p');
    closeBtn.addEventListener('click',()=>{
        document.querySelector('.modal').style.opacity=0;
        setTimeout(()=>{
            document.querySelector('.modal').style.display="none";
        },100);
    });
}