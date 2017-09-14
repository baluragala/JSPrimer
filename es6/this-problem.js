let Person = function(name,age){
    this.name = name;
    this.age  = age;
    this.print = () => {
        console.log(`Name : ${this.name} and Age : ${this.age}`)
    }
}

let p = new Person('James',21);

p.print();

let print = p.print;//.bind(p);

setTimeout(function(){
    console.log(this)
    print();
},0)