{
    let nav=document.querySelector('nav');
    let features=document.getElementById("features"); 
    window.addEventListener('scroll',()=>{
        if(features.getBoundingClientRect().top<=100)
            nav.classList.add('nav-visible');
        else nav.classList.remove("nav-visible");
    });
}
{
    let modal=document.querySelector('.modal');
    function openModal(){
        modal.style.display="block";
        setTimeout(()=>{
            modal.style.opacity=1;
        },0);
    }
    document.querySelector('nav button').addEventListener('click',()=>{
        openModal();
    });
    document.querySelector('#join button').addEventListener('click',()=>{
        openModal();
    });
}