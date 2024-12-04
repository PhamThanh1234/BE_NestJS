//Bai 1:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.age = age;
        this.name = name;
        this.grade = grade;
    }
    Student.prototype.getDetial = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Grade: ").concat(this.grade));
    };
    return Student;
}());
var thanh = new Student("Thanh", 21, "Nam");
console.log(thanh.getDetial());
//Bai 2
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance, accountNumber) {
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function () {
        return this.balance;
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, balance, accountNumber) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.calculateInterest = function () {
        var interest = (this.balance * this.interestRate) / 100;
        console.log(" ".concat(interest));
        return interest;
    };
    return SavingAccount;
}(BankAccount));
var account = new BankAccount(100, "Thanh");
account.deposit(50);
console.log(account.withdraw());
// Bai 3
var Book = /** @class */ (function () {
    function Book(title, author, JSNM) {
        this.title = title;
        this.author = author;
        ;
        this.JSNM = JSNM;
    }
    Book.prototype.addBook = function (book) {
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (JSNM) {
        var bookIndex = this.books.findIndex(function (book) { return book.JSNM === JSNM; });
        if (bookIndex !== -1) {
            var removedBook = this.books.splice(bookIndex, 1)[0];
            console.log("Book \"".concat(removedBook.title, "\" \u0111a\u0303 \u0111\u01B0\u01A1\u0323c xo\u0301a."));
        }
        else {
            console.log("Kh\u00F4ng co\u0301 \u0111\u00EA\u0309 xo\u0301a \"".concat(JSNM, "\"."));
        }
    };
    Library.prototype.findBook = function (title) {
        var book = this.books.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
        if (book) {
            console.log("Sach: Title: \"".concat(book.title, "\", Author: \"").concat(book.author, "\", JSNM: \"").concat(book.JSNM, "\""));
            return book;
        }
        else {
            console.log("Kh\u00F4ng ti\u0300m th\u00E2\u0301y \"".concat(title, "\"."));
            return null;
        }
    };
    return Library;
}());
// Bai 4
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(Radius) {
        var _this = _super.call(this) || this;
        _this.Radius = Radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return this.Radius * 2 * 3.14;
    };
    return Circle;
}(Shape));
//Bai 5
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, position, salary) {
        return _super.call(this, name, position, salary) || this;
    }
    Manager.prototype.getDetails = function () {
        return "Manager Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: ").concat(this.salary);
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, position, salary) {
        return _super.call(this, name, position, salary) || this;
    }
    Developer.prototype.getDetails = function () {
        return "Developer Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: ").concat(this.salary);
    };
    return Developer;
}(Employee));
var employees = [
    new Manager("Alice", "Senior Manager", 80000),
    new Developer("Bob", "Frontend Developer", 60000),
    new Developer("Charlie", "Backend Developer", 65000),
    new Manager("Diana", "Project Manager", 85000),
];
employees.forEach(function (employee) {
    if (employee instanceof Manager) {
        console.log(employee.getDetails());
    }
    else if (employee instanceof Developer) {
        console.log(employee.getDetails());
    }
});
