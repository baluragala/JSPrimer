// abstract class AbstractEmployee {
//     public id: number;
//     public name: string;

//     abstract getDetails(): string;

//     public printDetails() {
//         console.log(this.getDetails());
//     }
// }

// class Employee extends AbstractEmployee {
//     getDetails(): string {
//         return `id : ${this.id}, name : ${this.name}`;
//     }
// }


class Product {
   
    constructor( public title: string,  public price: number) {
        
    }
}

let p = new Product('Galaxy S8', 600);
console.log(`Title: ${p.title}, Price: ${p.price}`)