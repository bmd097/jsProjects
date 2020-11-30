{
    let upSlides=document.querySelectorAll('.page-Up-animation');
    let rightSlides=document.querySelectorAll('.page-right-animation');
    let leftSlides=document.querySelectorAll('.page-left-animation');
    window.addEventListener('scroll',e=>{
        upSlides.forEach(slide=>{
            if(parseInt(slide.getBoundingClientRect().top)<innerHeight){
                slide.style.transform='translateY(0px)';
                slide.style.opacity=1;
            }
        });
        rightSlides.forEach(slide=>{
            if(parseInt(slide.getBoundingClientRect().top)<(innerHeight/2+innerHeight/4)){
                slide.style.transform='translateX(0px)';
                slide.style.opacity=1;
            }
        });
        leftSlides.forEach(slide=>{
            if(parseInt(slide.getBoundingClientRect().top)<(innerHeight/2+innerHeight/4)){
                slide.style.transform='translateX(0px)';
                slide.style.opacity=1;
            }
        });
    });
}