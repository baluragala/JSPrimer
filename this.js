let Person = function(name,age){
	this.name = name;
	this.age = age;
	this.print = function(){
		
		console.log(`Name :${this.name} and Age: ${this.age}`)
	}
}

let p = new Person('James',32)

let print = p.print;

setTimeout(function(){
	print()
},1000)