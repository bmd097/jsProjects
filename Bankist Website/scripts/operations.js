{
    let links=document.querySelectorAll('.operation-card div p');
    let heading=document.querySelector('.operation-card h2');
    let paragraph=document.querySelector('.operation-card>p');
    let data=[
        {
            title : `Tranfser money to anyone, instantly! No fees, no BS.`,
            paro : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'+
             'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
             'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
             'nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title : 'Buy a home or make your dreams come true, with instant loans.',
            paro : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum '+
            'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,'+
             'sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title : `No longer need your account? No problem! Close it instantly.`,
            paro : `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui`+
             `officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis`+
              `nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        }
    ]
    links.forEach((link,i)=>{
        link.addEventListener('click',()=>{
            initiateChange(link,i);
        });
    });
    function initiateChange(link,i){
        link.style.transform='translateY(-70%) scale(1.05)';
        links.forEach((link,index)=>{
            if(index!=i) link.style.transform='translateY(-50%)';
        });
        heading.innerText=data[i]['title'];
        paragraph.innerText=data[i]['paro'];
    }
    initiateChange(links[0],0);
}