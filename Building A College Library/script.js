{
    let state={
        values:[]
    }
    class Book{
        constructor(name,author,type){
            this.name=name;
            this.author=author;
            this.type=type;
        }
        validate(){
            if(this.name.length<2) return false;
            if(this.author.length<2) return false;
            return true;
        }
        addBookToLibrary(){
            let tablebody=document.getElementById('tablebody');
            let tablerow=document.createElement('tr');
            tablerow.innerHTML=`<td>${this.name}</td>
                                <td>${this.author}</td>
                                <td>${this.type}</td>`;
            let thisCurrentBook=this;
            tablerow.addEventListener('dblclick',()=>{
                state.values=state.values.filter(obj=>
                    (obj.name!==thisCurrentBook.name) && 
                    (obj.author!==thisCurrentBook.author) && 
                    (obj.type!==thisCurrentBook.type)
                );
                tablerow.remove();
                console.log(state);
                localStorage.setItem('key',JSON.stringify(state));
                console.log(JSON.parse(localStorage.getItem('key')));
            });
            tablebody.appendChild(tablerow);
        }
    }
    document.querySelector('form button').addEventListener('click',addBook);
    function addBook(e){
        e.preventDefault();
        let name=document.getElementById('name');
        let author=document.getElementById('author');
        let fric=document.getElementById('fric');
        let prog=document.getElementById('prog');
        let cook=document.getElementById('cook');
        let type;
        if(fric.checked) type=fric.value;
        else if(prog.checked) type=prog.value;
        else type=cook.value;
        let newBook=new Book(name.value,author.value,type);
        if(!newBook.validate()) return;
        newBook.addBookToLibrary();
        saveToLocalStorage(newBook);
        document.querySelector('form').reset();
    }
    function saveToLocalStorage(newBook){
        state.values.push(newBook);
        localStorage.setItem('key',JSON.stringify(state));
        console.log(JSON.parse(localStorage.getItem('key')));
    }
    function initialize(){
        if(localStorage.getItem('key')){
            state=JSON.parse(localStorage.getItem('key'));
            let tablebody=document.getElementById('tablebody');
            for(let key of state.values){
                let tablerow=document.createElement('tr');
                tablerow.innerHTML=`<td>${key.name}</td>
                                    <td>${key.author}</td>
                                    <td>${key.type}</td>`;
                tablerow.addEventListener('dblclick',()=>{
                    // state.values.filter(obj=>
                    //     (obj.name!==key.name) && 
                    //     (obj.author!==key.author) && 
                    //     (obj.type!==key.type)
                    // );
                    let newState=[];
                    for(let val of state.values){
                        console.log(val," ",key);
                        if((val.name!=key.name) && 
                        (val.author!=key.author) && 
                        (val.type!=key.type)) newState.push(val);
                    }
                    state.values=newState;
                    tablerow.remove();
                    console.log(state);
                    localStorage.setItem('key',JSON.stringify(state));
                    console.log(JSON.parse(localStorage.getItem('key')));
                });
                tablebody.appendChild(tablerow);
            }
            console.log(state);
            localStorage.setItem('key',JSON.stringify(state));
            console.log(JSON.parse(localStorage.getItem('key')));
        }
    }
    initialize();
}

