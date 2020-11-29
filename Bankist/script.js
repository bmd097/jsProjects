let data=[
    {
        user:'js',
        pin:'1111',
        balance: 1600,
        in:2000,
        out:400,
        interest:100,
        transactions: [
            {
                type:'deposit',
                date: '25/2/20',
                money: '1900'
            },
            {
                type:'withdraw',
                date: '25/4/20',
                money: '400'
            }
        ]
    }
];
{
    let nav = document.querySelector('nav');
    let main=document.querySelector('main');
    let display=document.querySelector('body>div');
    let userId;
    let pin;
    let exitId;
    let mainBal=document.querySelector('.info>p');
    let inBal=document.getElementById('in');
    let outBal=document.getElementById('out');
    let interest=document.getElementById('interest');
    let transactionsDisplay=document.querySelector('.transactions');
    let timeToExit;
    window.addEventListener('load',()=>{
        main.style.display='none';
    })
    document.querySelector('nav>form>button').addEventListener('click',e=>{
        e.preventDefault();
        logInUser();
    });

    document.querySelector('.transfer>div>button').addEventListener('click',()=>{
        let transferUser=document.getElementById("transferUser");
        let transferAmount=document.getElementById("transferAmount");
        if(transferUser.value==='' || transferAmount.value==='') return;
        if(parseInt(mainBal.innerText)<parseInt(transferAmount.value)) {
            alert('Insufficient Balance!');
            timeToExit+=30;
            return;
        }else{
            mainBal.innerText=parseInt(mainBal.innerText)-parseInt(transferAmount.value)+" $";
            outBal.innerText=parseInt(outBal.innerText)+parseInt(transferAmount.value)+" $";
            let tranCard=document.createElement('div');
                tranCard.className='tranCard';
                tranCard.innerHTML=`
                    <div>
                        <p class="withdraw">WITHDRAW</p>
                        <p>${new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear()}</p>
                    </div>
                    <p>${transferAmount.value} $</p>
                `;
            transactionsDisplay.insertBefore(tranCard,transactionsDisplay.children[0]);
            transferUser.value="";
            transferAmount.value="";
            timeToExit+=30;
        }
    });

    document.querySelector(".loan>div>button").addEventListener('click',()=>{
        let loanInput=document.querySelector('.loan input');
        if(loanInput.value==='') return;
        mainBal.innerText=parseInt(mainBal.innerText)+parseInt(loanInput.value)+" $";
        inBal.innerText=parseInt(inBal.innerText)+parseInt(loanInput.value)+" $";
        let tranCard=document.createElement('div');
                tranCard.className='tranCard';
                tranCard.innerHTML=`
                    <div>
                        <p class="deposited">DEPOSIT</p>
                        <p>${new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear()}</p>
                    </div>
                    <p>${loanInput.value} $</p>
                `;
        transactionsDisplay.insertBefore(tranCard,transactionsDisplay.children[0]);
        loanInput.value="";
        timeToExit+=30;
    });

    document.querySelector('.close>div>button').addEventListener('click',()=>{
        let user=document.getElementById('userId');
        let Pin=document.getElementById('pinClose');
        if(user.value==='' || Pin.value==='') return;
        exitUser(user.value,Pin.value);
    });

    function exitUser(Id,Pin){
        if(userId===Id && pin===Pin){
            nav.style.display='flex';
            display.style.display='flex';
            main.style.display='none';
            clearInterval(exitId);
        }
    }
    function logInUser(){
        userId=document.getElementById('name');
        pin=document.getElementById('pin');
        if(userId.value==='') return;
        if(autenticate(userId.value,pin.value)){
            display.style.display='none';
            nav.style.display='none';
            main.style.display='flex';
            userId=userId.value;
            pin=pin.value;
            let userData=data[0];
            mainBal.innerText=userData.balance+" $";
            document.getElementById('currDate').innerText=`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
            inBal.innerText=userData.in+" $";
            outBal.innerText=userData.out+" $";
            interest.innerText=userData.interest+" $";
            transactionsDisplay.innerHTML='';
            userData.transactions.forEach(ele=>{
                let tranCard=document.createElement('div');
                tranCard.className='tranCard';
                tranCard.innerHTML=`
                    <div>
                        <p class=${ele.type==='deposit'?"deposited":"withdraw"}>${ele.type.toUpperCase()}</p>
                        <p>${ele.date}</p>
                    </div>
                    <p>${ele.money} $</p>
                `;
                transactionsDisplay.insertBefore(tranCard,transactionsDisplay.children[0]);
            });

            timeToExit=120;
            let exitAlert=document.querySelector('.status>p>span');
            exitId=setInterval(()=>{
                if(timeToExit===0){
                    exitUser(userId,pin);
                }
                let min=parseInt(timeToExit/60);
                let sec=parseInt(timeToExit%60);
                exitAlert.innerText=min+" : "+sec;
                timeToExit--;
            },1000);
        }else alert('Sorry:( Invalid User!');
    }

    function autenticate(userId,pin){
        return userId==='js' && pin==='1111';
    }
}