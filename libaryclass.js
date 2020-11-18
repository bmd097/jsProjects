class Library{
    constructor(state){
        this.state=state;
        this.users={};
    }
    getBookList=()=>{
        console.log("**************Book List*************");
        for(let key in this.state)   console.log(key," : ",this.state[key]);
    }
    getUsersList=()=>{
        console.log("**************USERS****************");
        for(let key in this.users)  console.log(key," : ",this.users[key]);
    }
    issueBook=(bookName,user)=>{
        if(this.state[bookName.toUpperCase()]){
            this.state[bookName.toUpperCase()]=this.state[bookName.toUpperCase()]-1;
            if(this.users[user.toUpperCase()]){
                this.users[user.toUpperCase()]=this.users[user.toUpperCase()]+1;
            }else this.users[user.toUpperCase()]=1;
            console.log("ISSUED BOOK ",bookName," to ",user);
        }
        else console.log("Book Not AVAILABLE");
    }
    returnBook=bookName=>{
        if(this.state[bookName.toUpperCase()]){
            this.state[bookName.toUpperCase()]=this.state[bookName.toUpperCase()]+1;
        }
        else this.state[bookName.toUpperCase()]=1;
    }
}
const books={
    GUAVA : 5,
    LION : 4,
    TOMBY : 3
}
let lib=new Library(books);
lib.getBookList();
lib.issueBook('Lion','Ramesh');
lib.issueBook('Lion','Mohit');
lib.issueBook('Lion','LohiT');
lib.getBookList();
lib.issueBook('tomby','Lohit');
lib.getBookList();
lib.getUsersList();

