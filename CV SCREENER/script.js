let button=document.querySelector('div button');
let cvData;
let index;
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>{
        button.style.display="block";
        cvData=data;
        index=0;
    });
button.addEventListener('click',(e)=>{
    // console.log(cvData);
    if(index>=cvData.length) {
        button.innerText="THAT'S IT";
        return;
    }
    button.innerText="NEXT";
    e.target.parentElement.children[0].innerText='Name : '+cvData[index]['name'];
    e.target.parentElement.children[1].innerText='Email : '+cvData[index]['email'];
    e.target.parentElement.children[2].innerText='Adress : '+
                    cvData[index]['address']['city']+", "+
                    cvData[index]['address']['street']+", "+
                    cvData[index]['address']['zipcode'];
    e.target.parentElement.children[3].innerText='Phone : '+cvData[index]['phone'];
    index++;
});