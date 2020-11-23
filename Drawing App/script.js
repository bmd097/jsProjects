let canvas=document.querySelector('canvas');
let ctx=canvas.getContext('2d');
let pencil=document.getElementById('pencil');
let eraser=document.getElementById('eraser');
let rangeSlider=document.getElementById('range-slider');
let colorSlider=document.getElementById('color-slider');
let painting=false;
let erase=false;


pencil.addEventListener('click',(e)=>{
    e.preventDefault();
    erase=false;
    pencil.className='active';
    eraser.className="";
    rangeSlider.min=1;
    rangeSlider.max=20;
    rangeSlider.value=4;
});

eraser.addEventListener('click',(e)=>{
    e.preventDefault();
    erase=true;
    eraser.className='active';
    pencil.className="";
    rangeSlider.min=30;
    rangeSlider.max=100;
    rangeSlider.value=65;
});

window.addEventListener('resize',()=>{
    resize();
})
resize();
function resize(){
    canvas.width=innerWidth-5;
    canvas.height=innerHeight-5;
}

function startPosition(e){
    painting=true;
    draw(e);
}
function finishPosition(){
    painting=false;
    ctx.beginPath();
}

function draw(e){
    if(!painting) return;
    if(erase) ctx.lineWidth=rangeSlider.value;
    else ctx.lineWidth=rangeSlider.value;
    ctx.lineCap='round';
    if(erase) ctx.strokeStyle='white';
    else ctx.strokeStyle=`${colorSlider.value}`;
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
}
canvas.addEventListener('mousedown',startPosition);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',finishPosition);





