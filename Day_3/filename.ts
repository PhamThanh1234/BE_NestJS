//Bai 1:

class Student {
   name:string;
   age:number;
   grade:string;

   constructor(name:string,age:number,grade:string) {
    this.age =age;
    this.name = name;
    this.grade = grade;
  }
    getDetial():void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
    }
    
}
const thanh:Student = new Student("Thanh",21,"Nam")
console.log(thanh.getDetial())

//Bai 2

class BankAccount {
   accountNumber: string;
  balance: number;

  constructor(initialBalance: number,accountNumber:string) {
    this.balance = initialBalance;
    this.accountNumber =accountNumber;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(): number {
    return this.balance;
  }
}

class SavingAccount extends BankAccount {
  interestRate: number;

  constructor(accountNumber: string, balance: number, interestRate: number) {
    super(balance,accountNumber);
    this.interestRate = interestRate;
  }
 
  calculateInterest(): number {
    const interest = (this.balance * this.interestRate) / 100;
    console.log(` ${interest}`);
    return interest;
  }
}

const account = new BankAccount(100,"Thanh");
account.deposit(50);
console.log(account.withdraw()); 


// Bai 3

class Book {
  title: string;
  author: string;
  JSNM:string;
  constructor(title: string, author: string,JSNM:string) {
    this.title = title;
    this.author = author;;
    this.JSNM=JSNM;
    }
  addBook(book: Book){

  }
}
class Library {
  books: Book[];
  constructor() {
    this.books = [];
  }
  
  addBook(book:Book){
    this.books.push(book);
  }
  removeBook(JSNM: string): void {
    const bookIndex = this.books.findIndex(book => book.JSNM === JSNM);
    if (bookIndex !== -1) {
      const removedBook = this.books.splice(bookIndex, 1)[0];
      console.log(`Book "${removedBook.title}" đã được xóa.`);
    } else {
      console.log(`Không có để xóa "${JSNM}".`);
    }
  }
  findBook(title: string): Book | null {
    const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (book) {
      console.log(`Sach: Title: "${book.title}", Author: "${book.author}", JSNM: "${book.JSNM}"`);
      return book;
    } else {
      console.log(`Không tìm thấy "${title}".`);
      return null;
    }
  }
}

// Bai 4

abstract class Shape {
  abstract calculateArea():number;
}

class Rectangle extends Shape {
   width: number;
   height: number;

  constructor(width: number, height: number) {
    super()
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
      return this.width * this.height;
  }
}
class Circle  extends Shape {
    Radius: number;
    
 
   constructor(Radius: number) {
     super()
     this.Radius = Radius;
     
   }
 
   calculateArea(): number {
       return this.Radius * 2*3.14;
   }
    
}


//Bai 5

class Employee {
  name: string;
  position: string;
  salary: number;

  constructor(name: string, position: string, salary: number) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}


class Manager extends Employee {
  

  constructor(name: string, position: string, salary: number) {
    super(name, position, salary);
    
  }


  getDetails(): string {
    return `Manager Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`;
  }
}


class Developer extends Employee {


  constructor(name: string, position: string, salary: number) {
    super(name, position, salary);
    
  }

  
  getDetails(): string {
    return `Developer Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`;
  }
}


const employees: Employee[] = [
  new Manager("Alice", "Senior Manager", 80000),
  new Developer("Bob", "Frontend Developer", 60000),
  new Developer("Charlie", "Backend Developer", 65000),
  new Manager("Diana", "Project Manager", 85000),
];


employees.forEach(employee => {
  if (employee instanceof Manager) {
    console.log(employee.getDetails());
  } else if (employee instanceof Developer) {
    console.log(employee.getDetails());
  }
});
